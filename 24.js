url=require("url")
addr="http://localhost:8085/default.html?Name=Prof.Khushbu_Patel&intial=PKP"
var q= url.parse(addr,true)
console.log(q)
console.log(q.host)
console.log(q.pathname)
console.log(q.query.Name)
console.log(q.slashes)