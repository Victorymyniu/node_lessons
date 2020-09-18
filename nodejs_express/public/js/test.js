const { text } = require("body-parser");

var textFun = function() {
  const arr = [2,4,5,6]
  arr.forEach(item => item * 3)
  return arr
}
textFun()