console.log(__filename)
console.log(__dirname)
//write node js script to create a class named person by assigning name and age in form of members, create one function
//named elder which returns elder person object, details of elder person should be printed in console as well as in
//file
class person{
    constructor(name, age){
        this.name=name;
        this.age=age;
        
    }
    elder(){

            
            for (const key in myjson) {
                console.log(`${key}: ${obj[key]}`);

            }
    }
}
var p1=new person("abc",34)
var p2=new person("xyz",65)
p2.elder()