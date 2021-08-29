## ask: old-tickets

### Description:
```sh
Free tickets for everyone! Support tickets that you should resolve!

Flag format: CTF{sha256}
```
```sh
<!-- Our first bug was: d63af914bd1b6210c358e145d61a8abc. Please fix now! -->
```

```sh
$ echo "d63af914bd1b6210c358e145d61a8abc" > hashes
$ hashcat -a 3 hashes 1?d?d?d?d?d?d?d?d?d --force --show >> out.txt
```

![ScreenShot](screenshots/Screenshot&#32;2021-08-29&#32;at&#32;15.09.52.png)
![ScreenShot](screenshots/Screenshot&#32;2021-08-29&#32;at&#32;00.07.37.png)

