// write  a node js script to perform task as asked
// 1.create one page with 2 links, home and about
// 2.both pages must contain html type content and add required content on both the pages 
// 3. if user add any other url then there should be message, page not found
var http2=require('http')
var fs=require("fs")
http2.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    if(req.url=='/')
        {
            res.write("<a href='/'>Home</a>\n<a href='/about'>About</a>")
            res.write("Welcome to home page")
            res.end()
        }
    else if(req.url=='/about'){

        res.write("welcome to about page")
        res.end()
    }
    
    else{
        res.write("Page not found")
        res.end()
    }
    res.end()
}).listen(8082)