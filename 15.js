// write js script to make file named temp.txt, check if physical memory is greater thn 1 gb, print message sufficient memory n the file
// else print low memory in the file
FS1=require("fs")
OS1=require("os")
FS1.writeFileSync("temp.txt","")
mem=OS1.freemem()
console.log(mem)
i=0;
while(i<4){
    mem=mem/1024
    i++
}
console.log(mem)
if(mem>=1){
    FS1.writeFileSync("temp.txt",'sufficient memory')
    console.log('sufficient memory')
}
else{
    FS1.writeFileSync("temp.txt",'low memory')
    console.log('low memory')
}