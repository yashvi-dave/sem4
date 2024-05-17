// 3.	Write a NodeJS code to calculate and display the profit or loss incurred by an investor   who purchased 100 shares of a company's stock at Rs.50 per share and later sold them at Rs.60 per share. The script should utilize the HTTP module to create an HTTP server that serves the profit or loss details. If there is a profit, the message should be displayed in green color, and if there is a loss, it should be displayed in red color on server.
http=require("http")
var bp=50;
var sp=60;
var cp=0;
var loss=0;
i=0;
while(i<100){
    if(sp<bp){
        loss=loss+bp-sp
    }
    else if(sp>bp){
        cp=cp+sp-bp
    }
    i++;
}
console.log(cp,loss)
http.createServer(function(req,res){
    res.write('<p style="color:green">profit='+cp+'</p>')
    res.write('<p style="color:red">loss='+loss+'</p>')
    res.end();
}).listen(3082)
