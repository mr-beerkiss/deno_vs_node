const { createServer } = require("http");
const fibonacci = require("../shared/fib");
// const fibonacci = require("../shared/fib");

const server = createServer((req, res) => {
    console.log(`Received request for ${req.url}`);

    if ( req.url === "/") {
        res.end("Hello world");
    } else if ( req.url === "/next") {
        res.end("Get the next fib number");
    } else if ( req.url === "/current") {
        res.end("Get get the current number in the list");
    } else {
        const possibleNum = req.url.substring(1);
        try {
            const num = parseInt(possibleNum, 10);
            const result = fibonacci(num);
            console.log(`result of fibonacci(${num}) = ${result}`);
            res.end(`${result}\n`);
        } catch (err) {
            console.error("cannot work with this", err);
            res.writeHead(404);
            res.end("Not found");
        }
    }
    
    
    
})

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Server listening on port ${port}`));


