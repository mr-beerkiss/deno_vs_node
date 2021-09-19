function fib_loop(n) {
  let a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

function fib_recursive(n) {
  if (n <= 1) return 1;

  return fib_recursive(n - 1) + fib_recursive(n - 2);
}

module.exports = {
  fib_loop,
  fib_recursive
};