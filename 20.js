// create an http page and pass json object on that webpage
var http1=require("http")
const { type } = require("os")
http1.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application/json'})
    a={"sub":["english",'hindi'],'std':"1st"}
    text=JSON.stringify(a);
    res.write(text)
    
    res.end()
    
}).listen(8081)