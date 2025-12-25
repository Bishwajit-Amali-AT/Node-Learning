const querystring = require('querystring');
function userFormSubmit(req,resp){
    let formdata = [];
    req.on("data",chunk=>{
        formdata.push(chunk);
    })
    req.on("end",()=>{
        let rawdata = Buffer.concat(formdata).toString();
        let finaldata = querystring.parse(rawdata);
        console.log(finaldata);
    })
    resp.write("Form submitted successfully");
    resp.end();
}

module.exports = userFormSubmit;