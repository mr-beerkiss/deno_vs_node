const wasmCode = await Deno.readFile("./build/optimized.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);

const fibLoop = wasmInstance.exports.fib_loop as CallableFunction;
const fibRecursive = wasmInstance.exports.fib_recursive as CallableFunction;

let start, end: number;
start = performance.now();
fibLoop(100000);
end = performance.now();

console.log(`Took ${end-start}ms time to run fibLoop(1000)`);


start = performance.now();
fibRecursive(40);
end = performance.now();

console.log(`Took ${end-start}ms time to run fibRecursive(40)`);
