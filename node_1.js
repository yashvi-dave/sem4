var ps=require("fs")
//ps.mkdirSync("Hello")
ps.writeFileSync("Hello/user.txt","Hello, Yashvi!")
ps.writeFileSync("Hello/user.txt","Hello, Yasvi!")//ONLY OVERWRITES THE NEW DATA
ps.appendFileSync("Hello/user.txt",'\nGood evening!')
var data=ps.readFileSync("Hello/user.txt",'utf-8')
console.log(data)//.toString() if you dont add utf-8
ps.renameSync("Hello/user.txt","hello/user2.txt")