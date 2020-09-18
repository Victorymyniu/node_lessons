// 引入express框架
const express  = require('express')
// 创建网站服务器
const app = express();

app.use(fn({a:1}))

function fn(obj) {
  return function (req,res,next) {
    if (obj.a == 1) {
      console.log(req.url)
    } else {
      console.log(__dirname)
      console.log(req.method)
    }
    next()
  }
}
app.get('/',(req,res) => {
  res.send('ok')
})
// 端口监听
app.listen(3000)