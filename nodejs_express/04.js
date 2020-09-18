// 引入express框架
const express  = require('express')
const { runInNewContext } = require('vm')
// 创建网站服务器
const app = express()

// 1.网站维护公告
// app.use((req,res,next) => {
//   res.send('当前网站正在维护....')
// })

// 2.路由保护
app.use('/admin', (req,res,next) => {
  let isLogin = false
  // 如果用户登录
  if (isLogin) {
    // 让请求继续向下执行
    next()
  } else {
    // 如果用户没有登录，直接对客户端做出响应
    res.send('您还没有登录，不能访问 /admin 页面')
  }
})
app.get('/admin',(req,res) => {
  res.send('您已经登录，可以访问当前页面')
})

// 3.自定义404页面
app.use((req,res,next) => {
  // 为客户端响应404状态码以及提示信息
  res.status(404).send('当前访问的页面是不存在的')
})
//监听端口
app.listen(3000)
console.log('网站服务器启动成功')