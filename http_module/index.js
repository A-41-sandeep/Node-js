const http=require('http');


http.createServer((req,res)=>{
    res.write("<h1>Hello this first response using http</html>");
    res.end();
}).listen(4500);