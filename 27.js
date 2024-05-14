fs=require("fs")
http=require("http")
url=require("url")
http.createServer(function(req,res){
    url1=req.url;
    var q=url.parse(url1,true)
    res.write(fs.readFileSync(q.query.filename,'utf-8'))
    res.end()
}).listen(3120)