var ps=require("fs")
ps.writeFile("hello/user1.txt",'new program', function(err){
if(err)
{
    console.log(err)
}
else
{
    ps.appendFile("hello/user1.txt","is completed",
    function(err1){
        if(err1)
        {
            console.log(err1)
        }
        else
        {
            ps.readFile("hello/user1.txt",'utf-8',
            function(err2,data){
                if(err2){
                    console.log(err2)
                }else{
                    console.log(data)
                }
            })
            
        }
        })
}
})

