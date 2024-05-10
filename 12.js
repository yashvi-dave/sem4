// write a node js script to take 5 single digit elements seperated by white space in .txt file. print sorted Array of these 5 elements
// in terms of integer on node js server
ps=require("fs")
ps.writeFileSync("a1.txt",'1 5 3 7 8')
var data=ps.readFileSync("a1.txt",'utf-8').split(" ")
for(i in data){
    data[i]=parseInt(data[i])
}
data.sort()
console.log(data)
