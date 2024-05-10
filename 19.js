// create http webpage on which home page display welcome to home page
// student page display welcome to student page display
// and any other request, display page not found

var http2=require('http')
http2.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>Welcome to home page</h1>")
        res.end()
    }else if(req.url=='/student')
        {
            res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>Welcome to student page</h1>")
        res.end()

        }
    else{
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>page not found</h1>")
        res.end()
    }
    res.end()
}).listen(8082)