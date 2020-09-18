// 引入express框架
const express  = require('express')
// 创建网站服务器
const app = express()
app.get('/',(req,res) => {
  // send()
  // 1.send 方法内部会检测响应内容的类型
  // 2.send 方法会自动设置http状态码
  // 3.send 方法会帮我们自动设置响应的内容类型及编码
  // res.send('hello. Express') Content-Type: text/html; charset=utf-8

  // res.send({ user: 'tobi' }) Content-Type: application/json; charset=utf-8
  // res.send([1,2,3]) Content-Type: application/json; charset=utf-8

  // res.send(new Buffer('<p>some html</p>')) Content-Type: application/octet-stream
  // res.end('hello world')
  res.send('hello niutong')
})

app.get('/list',(req,res) => {
  res.send({name:'张三',age:20})
})

//监听端口
app.listen(3000)
console.log('网站服务器启动成功')