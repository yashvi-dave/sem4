var http2=require('http')
var fs=require("fs")
http2.createServer(function(req,res){
    res.writeHead(302,{'location':'https://www.google.com'})
    res.end()
}).listen(8081)