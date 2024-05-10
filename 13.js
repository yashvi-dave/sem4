// write a file using one json object and read the files which gives you the same json object in console
Fs=require("fs")
var a={"name":"abc","num":2};
Fs.writeFileSync("js_1.json",JSON.stringify(a))
data=Fs.readFileSync("js_1.json",'utf-8')
console.log(JSON.parse(data))