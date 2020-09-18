const express  = require('express')
const path = require('path')
const app = express();
// 实现静态资源访问功能
// app.use('/',express.static('public'))
// app.use(express.static(path.join(__dirname,'public')))
app.use('/static',express.static(path.join(__dirname,'public')))
// app.use('/static',express.static(__dirname + '/public'));//当用户请求的路径ulr以/static开头时，以第二个参数的方式进行处理（直接返回__dirname + '/public'目录下文件
// 端口监听
app.listen(3000)