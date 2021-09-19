#include <stdio.h>
#include <sys/time.h>

int fib_loop(int n) {
  int a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

int fib_recursive(int n) {
  if (n <= 1) return 1;

  return fib_recursive(n - 1) + fib_recursive(n - 2);
}

int main(void) {
  struct timeval start, end;
  int res;

  // start = clock();
  // res = fib_loop(40);
  // stop = clock();

  // printf("It took %lums to calculate fib(40) with a loop\n", stop-start);

  // start = clock();
  gettimeofday(&start, NULL);
  res = fib_recursive(40);
  gettimeofday(&end, NULL);

  int micro_secs = (end.tv_usec - start.tv_usec);

  printf("It took %dus to calculate fib(40) with recursion\n", micro_secs);
  
  return 0;
}
