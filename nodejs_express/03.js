// 引入express框架
const express  = require('express')
const { runInNewContext } = require('vm')
// 创建网站服务器
const app = express()

// 接受所有请求的中间件
app.use((req,res,next) => {
  console.log('请求执行了app.use中间件')
  next()
})

// 当客户端访问 /request 请求的时候执行当前中间件
app.use('/request',(req,res,next) => {
  console.log('请求执行了app.use /request中间件')
  next()
})

app.use('/list',(req,res) => {
  res.send('list')
})

app.get('/request',(req,res,next) => {
  req.name = '张三'
  next()
})
app.get('/request',(req,res) => {
  res.send(req.name)
})

//监听端口
app.listen(3000)
console.log('网站服务器启动成功')