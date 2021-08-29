from ctypes import *
from pwn import *
import hashlib

libc = CDLL("./libc-2.27.so")

libc.srand(4548)

a = libc.rand()
b = libc.rand()
print(a, b)

for c in range(0, 99999999999):
    if b == (c ^ a ^ 1337):
        print(c)
        print("CTF{%s}" % hashlib.sha256(c.encode()).hexdigest())
        exit(0)
