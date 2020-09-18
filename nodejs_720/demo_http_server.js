//Nodejs是运行在服务端的javascript,最明显的差异，nodejs没有浏览器，没有dom，没有onclick之类的
// 1.引入http模块，require
var http = require('http')
console.log(http.createServer)
// 2.创建服务器
// 3.处理相应与请求
http.createServer(function(req,res){
  //http头部消息 状态码200 text/plain
  res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
  // 向客户端发送数据
  res.end('<h1>第一个http服务</h1>')
}).listen(3000)
// 控制台打印信息
console.log('3000 已经创建')
