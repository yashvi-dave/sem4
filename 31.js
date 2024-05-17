import vd from 'validator'
var email='test@gmail.com'
console.log(vd.isEmail(email))
var email1='123@tests.'
console.log(vd.isEmail(email1))
console.log(vd.isLowercase("HelloLju"))
console.log(vd.isHexadecimal('ABC'))
console.log(vd.isEmpty(" "))
console.log(vd.isEmpty(""))
console.log(vd.isCurrency("123"))
console.log(vd.isDecimal('1.22'))
console.log(vd.isJSON('{"name":"ABC"}'))
