// find whether a year is leap or not from static url\
url=require("url")

var q=url.parse("http://localhost:8080/default.html?year=2024&month=feb",true)
if (q.query.year%4==0){
    console.log(q.query.year+"  is a leap year")
}else{
    console.log(q.query.year+" is not a leap year")
}