import { copy } from "https://deno.land/std@0.106.0/io/util.ts";

for (const filename of Deno.args) {
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
}