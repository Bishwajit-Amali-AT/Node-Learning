const server = require('http');
server.createServer((req,resp)=>{
    if(req.url === '/'){
        resp.write("This is a Home page");
    }else if(req.url === '/about'){
        resp.write("This is a About page");
    }else{
        resp.write("This is a 404 Not Found page");
    }
    resp.end();
}).listen(2112);