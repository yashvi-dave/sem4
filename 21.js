var http2=require('http')
var fs=require("fs")
http2.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'image/jpg'})
    img=fs.readFileSync('colors.jpg')
    res.end(img )
}).listen(8081)