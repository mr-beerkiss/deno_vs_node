import { readFile } from "node:fs/promises";
const actualArgs = process.argv.slice(2);

for (const filename of actualArgs) {
  const contents = await readFile(filename, "utf8");
  console.log(contents);
}
