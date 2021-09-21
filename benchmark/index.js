const http = require('http');
const { results: data } = require('./data/rick_and_morty.json');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log("Requested", url.pathname);
  
  const id = url.pathname.substring(1);
  const el = data.find(d => d.id == id);

  if (el) {
    console.log("Found a match");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(el));
  } else {
    console.log("Could not find a match");
    res.statusCode = 404;
    res.setHeader('Content-Type', 'plain/text');
    res.end("Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // console.log(data.map(({id, name}) => ({id, name}) ));
});



// console.log(data.results.map(({id, name}) => ({ id, name})));