const fs=require('fs');

const reqHandler=(req,res)=>{
    const url=req.url;
    const method =req.method;
    if (url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
} 
if (url==='/message' && method==="POST"){
    const body=[];
    req.on('data', (chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', ()=>{
        const parseBody=Buffer.concat
        (body).toString();
        const message=parseBody.split('=')[1];
        console.log(parseBody);
        // fs.writeFileSync('message.txt',message);
        fs.writeFile('message.txt',message,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end()
        });
        // res.statusCode=302;
        // res.setHeader('Location','/');
        // return res.end()

    });
    // fs.writeFileSync('message.txt','DUMMY');
    // res.statusCode=302;
    // res.setHeader('Location','/');
    // return res.end();
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1>HELLO FROM MY NODE.JS SERVER</h1></body>');
res.write('</html>');
res.end();
 };

// module.exports = reqHandler; 
// module.exports = {
//     handler:reqHandler,
//     someText:'Some hard code text'
// };
// module.exports.handler=reqHandler;
// module.exports.someText='some hard coded text';
exports.handler=reqHandler;
exports.someText='some hard coded text';