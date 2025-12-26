const server = require('http');
const fs = require('fs');
const header = fs.readFileSync('html/header.html', 'utf-8');


server.createServer((req, resp) => {
    const url = req.url;
    if (url === '/') {
        fs.readFile('html/home.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                return resp.end("Internal Server Error");
            }
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            data = header + data;
            resp.end(data);
        });
    }
    // Serve About page
    else if (url === '/about') {
        fs.readFile('html/about.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                return resp.end("Internal Server Error");
            }
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            data = header + data;
            resp.end(data);
        });
    }
    // Serve CSS
    else if (url === '/style.css') {
        fs.readFile('public/style.css', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(404, { 'Content-Type': 'text/plain' });
                return resp.end("CSS Not Found");
            }
            resp.writeHead(200, { 'Content-Type': 'text/css' });
            resp.end(data);
        });
    }
    // 404 for unknown routes
    else {
        resp.writeHead(404, { 'Content-Type': 'text/plain' });
        resp.end("404 Not Found");
    }
}).listen(3000);