// write a node js program to create two listeners for a common event, call the respective callbacks, print number of events associated with an emmiter, remove one of the listeners and print number of remaining listeners
var e=require("events")
var ee=new e.EventEmitter()
var f0=function f0(a1){
    console.log("event 1")
}
var f1=function f1(b1){
    console.log("event 2")
}
ee.addListener("oonn",f0)
ee.addListener("oonn",f1)
ee.emit("oonn")
console.log(ee.listenerCount("oonn"))
ee.removeListener("oonn",f0)
console.log(ee.listenerCount("oonn"))
ee.emit("oonn")