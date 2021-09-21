import { Character } from "./types.ts";
 
const port = 8082;
const server = Deno.listen({ port });
console.log(`HTTP webserver running.  Access it at:  http://localhost:${port}/`);

const { results: data } = JSON.parse(await Deno.readTextFile("./data/rick_and_morty.json"));


for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    
    const url = new URL(requestEvent.request.url);
    console.log(`Requested ${url.pathname}`);
    const requestedId = parseInt(url.pathname.substring(1), 10);

    const match = data.find((c: Character) => c.id == requestedId);

    if (match) {
      const { id, name, status, species } = match;
      console.log("Found a match");
      requestEvent.respondWith(
        new Response(`${JSON.stringify({id, name, status, species})}\n`, {
          status: 200,
        }),
      );
    } else {
      console.log("Could not find a match");
      requestEvent.respondWith(
        new Response("Not found\n", {
          status: 404,
        }),
      );
    }
  }
}