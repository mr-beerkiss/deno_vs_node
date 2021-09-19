import { serve } from "https://deno.land/std@0.107.0/http/server_legacy.ts";
// import { getPort } from "./get_port.ts";

// const port = getPort(Deno.env.get("PORT"));
// const hostname = "127.0.0.1";
// const server = serve({ port, hostname });

const port = 8080;
const server = serve({ port });
console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);

for await (const request of server) {
  request.respond({ 
      status: 200, 
      body: "Hello, world!\n", 
      headers: new Headers({
          "Content-Type": "text/plain"
      })
     });
}
