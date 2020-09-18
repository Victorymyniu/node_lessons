// 一个同步读取文件的的例子
// 同步读取文件
// .readFileSync()

var _fs=require('fs')
// console.log(_fs)
var data = _fs.readFileSync('./files/test.txt')
console.log(data.toString())
console.log('----------')
console.log('js已经执行结束')
/*
  这种操作事实上已经形成了阻塞
*/ 