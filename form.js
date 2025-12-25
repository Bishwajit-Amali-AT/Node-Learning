const server = require('http');
const filesystem = require('fs');
const querystring = require('querystring');

server.createServer((req,resp)=>{
    filesystem.readFile('./html/form.html',(error,data)=>{
        if(error){
            resp.write("Error loading HTML file");
        }
        
        if(req.url === '/'){
            resp.write(data);
            resp.end();
        }
        else if(req.url === '/submit'){
            let formdata = [];
            req.on('data',chunk=>{
                formdata.push(chunk);
            });
            req.on('end',()=>{
                let rawdata = Buffer.concat(formdata).toString();
                let finaldata = querystring.parse(rawdata);
            })
            resp.write("Form submitted successfully");

        }
        resp.end();
    });

}).listen(2112);