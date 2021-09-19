const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer(function(request, response) {
  let body = "";
  request.on("data", chunk => {
    body += chunk.toString(); // convert Buffer to string
  });

  request.on("end", () => {
    try {
      const res = eval(body);
      response.end(`${typeof res === "object" ? JSON.stringify(res, null, 2) : res}\n`) 
    } catch (ex) {
      console.error(ex);
      response.writeHead(500);
      response.end("Unknown Error");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

