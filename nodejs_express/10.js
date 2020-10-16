// 引入express框架
const express  = require('express')
//加载body-parser后，使用req.body即可获取前端传过来的post信息
const bodyParser = require('body-parser')
// 创建网站服务器
const app = express();

// 拦截所有请求
// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式

//加载body-parser处理post提交的数据
app.use(bodyParser.urlencoded({extended: false}))

app.post('/add',(req,res) => {
  // 接收post请求参数
  res.send(req.body)
})
// 端口监听
app.listen(3000)

// 测试案例在下面 post.html