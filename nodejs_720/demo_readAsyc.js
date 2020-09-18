// 这是一个基于回调的非阻塞的文件读取的例子
// 基于回调的异步读取文件
// .readFile()
var fs = require('fs')
// 第一个参数，是要读取的文件
// 第二个参数，是处理读取到的文件内容的回调函数
// 异步读文件
fs.readFile('./files/test.txt',function(err, data){
  if(err) return err;
  console.log(data.toString())   
})
console.log('----------')
console.log('js已经执行结束')