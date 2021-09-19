// const assert = require("assert");
const Benchmark = require("benchmark");
const wasm = require("..");
const jsFib = require("../fib");

// assert.strictEqual(myModule.fib_loop(10), 89);
// assert.strictEqual(myModule.fib_recursive(10), 89);

// console.log("ok");

const suite = new Benchmark.Suite;

suite
  .add("wasm fib_loop", () => wasm.fib_loop(10))
  .add("wasm fib_recursive", () => wasm.fib_recursive(10))
  .add("js fib_loop", () => jsFib.fib_loop(10))
  .add("js fib_recursive", () => jsFib.fib_recursive(10))
  .on("cycle", evt => console.log(String(evt.target)))
  .on("complete", function () {
    console.log(`Fastest is ${this.filter("fastest").map("name")}`);
  })
  .run({ "async": true });

