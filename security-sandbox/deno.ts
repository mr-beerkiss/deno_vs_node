import { serve } from "https://deno.land/std@0.107.0/http/server_legacy.ts";
import { readAll } from "https://deno.land/std@0.107.0/io/util.ts";

const port = 8081;
const server = serve({ port });
console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);

for await (const request of server) {
  const bodyBytes = await readAll(request.body);
  const decoder = new TextDecoder();
  const body = decoder.decode(bodyBytes);
  
  try {
    const res = eval(body);
    request.respond({ 
      status: 200, 
      body: `${typeof res === "object" ? JSON.stringify(res, null, 2) : res}\n`, 
     });
  } catch (ex) {
    console.error(ex);
    request.respond({
      status: 500,
      body: `${ex.name === "PermissionDenied" ? "You can't do that" : "Unknown Error"}\n`,
    })
  }
}
