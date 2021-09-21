import { serve } from "https://deno.land/std@0.107.0/http/server_legacy.ts";
import { Character } from "./types.ts";

const { results: data } = JSON.parse(await Deno.readTextFile("./data/rick_and_morty.json"));

const port = 8083;
const server = serve({ port });
console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);

for await (const request of server) {
  console.log(`Requested ${request.url}`);
  
  const requestedId = parseInt(request.url.substring(1), 10);

  const match = data.find((c: Character) => c.id == requestedId);

  if (match) {
    const { id, name, status, species } = match;
    console.log("Found a match");

    request.respond({ 
      status: 200, 
      body: `${JSON.stringify({id, name, status, species})}\n`,
      headers: new Headers({
          "Content-Type": "application/json"
      })
     });
  } else {
    request.respond({ 
      status: 404, 
      body: "Not Found\n",
      headers: new Headers({
          "Content-Type": "text/plain"
      })
     });
  }


  
}
