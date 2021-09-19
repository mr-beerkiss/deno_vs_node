# Node
curl -X POST -H "Content-Type: text/plain" --data "process.env" http://localhost:3001/
curl -X POST -H "Content-Type: text/plain" --data "const fs=require('fs');const data=fs.readFileSync('/etc/passwd');data.toString();" http://localhost:3001/

# Deno
curl -X POST -H "Content-Type: text/plain" --data "Deno.env.toObject()" http://localhost:8081/
curl -X POST -H "Content-Type: text/plain" --data "Deno.readTextFileSync('/etc/passwd')" http://localhost:8081/
curl -X POST -H "Content-Type: text/plain" --data "Deno.run({cmd: ['cat', '/etc/passwd']});" http://localhost:8081/

# TODO: Figure out how to return a value from IIFE via eval
# curl -X POST -H "Content-Type: text/plain" --data "(async function() { const p=Deno.run({cmd: ['cat','/etc/passwd'], stdout: 'piped'});const o=await p.output(); return o })();" http://localhost:8081/

