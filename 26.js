http=require("http")
url1=require("url")
http.createServer(function(req,res){
console.log(req.url)
var q1=url1.parse(req.url,true)
console.log(typeof(q1.query.year))
console.log(typeof(q1.query.month))
res.write((q1.query.year))
res.write((q1.query.month))
res.end()
}).listen(3180)