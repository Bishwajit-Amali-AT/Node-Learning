const server = require('http');
const userForm = require('./html/userForm.js');
const userFormSubmit = require('./userFormSubmit.js');

server.createServer((req,resp)=>{
    if(req.url === '/'){
        resp.write(userForm());
    }else if(req.url === '/submit'){
        userFormSubmit(req,resp);
    }
    resp.end();
}).listen(3000);