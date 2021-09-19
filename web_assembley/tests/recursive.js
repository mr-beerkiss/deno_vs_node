const wasm = require("..");

const start = Date.now();
const result = wasm.fib_recursive(40);
const end = Date.now();

console.log(`Time taken to calculate fib(40) using recursion: ${end-start}ms`);