import { getPort } from "./get_port.ts";
import { assertEquals } from "https://deno.land/std@0.107.0/testing/asserts.ts";

Deno.test("Returns 8080 if input undefined", () => {
  assertEquals(getPort(undefined), 8080);
});

Deno.test("Returns 8080 if input won't parse as int", () => {
  assertEquals(getPort("not a number"), 8080);
});

Deno.test("Returns 8080 if input is < 0", () => {
  assertEquals(getPort("-1"), 8080);
});

Deno.test("Returns 8080 if input is 2^16-1 (Usual max port number)", () => {
  assertEquals(getPort(`${Math.pow(2, 16)}`), 8080);
});

Deno.test("Returns the value is string is int between 0 and 2^16-1", () => {
  assertEquals(getPort("3000"), 3000);
});