import ch from 'chalk'
console.log("LJU")
console.log("hello"+ch.bgMagentaBright("LJU")+"GM")
console.log(ch.blue("hello"))
console.log(ch.blue("hello","gm","lju"))
console.log(ch.red("hello",ch.underline.bgGrey("world")+"lju"))
console.log(ch.green.bold("i am chalk"))
console.log(ch.rgb(123,45,69).underline("Underlined, reddish color"))
console.log(ch.hex('#DEADED').bold("GRAY"))