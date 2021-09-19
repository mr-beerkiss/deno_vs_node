(async function() {
  const p = Deno.run({cmd: ["cat", "/etc/passwd"], stdout: "piped"});
  const o = await p.output();
  const str = new TextDecoder().decode(o);
  return str;
})();
