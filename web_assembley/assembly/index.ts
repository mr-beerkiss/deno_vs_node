// The entry file of your WebAssembly module.
export function fib_loop(n: i32): i32 {
  let a = 1, b = 0, temp: i32;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

export function fib_recursive(n: i32): i32 {
  if (n <= 1) return 1;

  return fib_recursive(n - 1) + fib_recursive(n - 2);
}