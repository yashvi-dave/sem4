var http1=require("http")
const { type } = require("os")
http1.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("hello")
    res.write("\nhello")
    res.write("\nhello")
    res.write("<h1>hello world</h1>")
    res.write(req.url)
    res.end("end1")
    
}).listen(8081)