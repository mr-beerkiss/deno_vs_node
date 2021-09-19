const wasm = require("..");

const start = Date.now();
const result = wasm.fib_loop(40);
const end = Date.now();

console.log(`Time taken to calculate fib(40)=${result} using a loop: ${end-start}ms`);