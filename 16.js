// to create a folder named AA at temp folder,also, create a file named temp1 .txt inside this folder. now check if working on
// 32 bit platform, then print 'you are working on windows 32 ' else 'windows64'
FS1=require("fs")
OS1=require("os")
p=OS1.tmpdir()
np=p+"\\AA"
nf=np+"\\tempfile.txt"
console.log(nf)
//FS1.mkdirSync(np)
FS1.writeFileSync(nf," ")
ty=OS1.platform()
if(ty=="win32"){
    FS1.writeFileSync(nf,"you are working on windows 32")
}
else{
    FS1.writeFileSync(nf,"you are working on windows 64")
}
console.log(FS1.readFileSync(nf,'utf-8'))