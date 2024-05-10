var path=require("path")
var path1="C:\\Users\\LJENG\\Desktop\\47_FSD\\Hello\\user1.txt"
console.log(path.dirname(path1))
console.log(path.extname(path1))//returns extension name
console.log(path.basename(path1))
console.log(path.parse(path1))//returns json object of root, dir,base,ext,name