const http = require('http');
const port = process.argv[2];
http.createServer((request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.write("Hello World, this is my first server and with dynamic port from cmd line");
    response.end();
}).listen(process.argv[2]);