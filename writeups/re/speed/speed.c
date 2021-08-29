#include <stdio.h>

void nothing_here(void)

{
  srand(4548);
  return;
}

void guessing(void) {
  int a;
  int b;
  int c;

  nothing_here();
  a = rand();
  b = rand();
  //c = 1623914191;  

  if (b == (c ^ a ^ 1337)) {
    //printf("a = %d\n", a);
    //printf("b = %d\n", b);
    //printf("c = %d\n", c);
    //printf("c xor a xor 1337 = %d\n", c ^ a ^ 1337);
    puts(
        "Password Accepted, welcome to srand() FUNCTION ! Submit input as flag! (Don\'t forget to wrap it in CTF{sha256(number)})"
        );
        return;
  }
  return;
}

void main(void) {

  guessing();
  return;
}
