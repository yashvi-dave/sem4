// write node js script to write the text 'this is data' to the new.txt file. After that append the text, 'this is data'
// to the same new.txt file, then reaD THE FILE AND PRINT IT ON console. AFTER FINISHING READ OPERATION, PRINT THE THANK YOU
// ALL OPERATIONS Are asynchronous and sequence should be maintained
fs=require('fs')
e=require("events")
ee=new e.EventEmitter()
ee.on("write",()=>{
    fs.writeFile("new.txt","this is data",()=>{ee.emit("append")}

)}
)
ee.on("append",()=>{
    fs.appendFile("new.txt","this is data",()=>ee.emit("read"))}

)

ee.on("read",()=>{
    fs.readFile("new.txt",'utf-8',(err,data)=>{console.log(data)}

)}
)
console.log("thank you")
ee.emit("write")

