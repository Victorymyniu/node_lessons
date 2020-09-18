const express  = require('express')
const app = express();
// 实现静态资源访问功能
app.use(require('cors')())
app.use('/',express.static('public'))

app.get('/about', (req,res) => {
  res.send({page: 'About us'})
})
app.get('/product', (req,res) => {
  res.send(
    [
      {id:1,tilte:'Product A'},
      {id:2,tilte:'Product B'},
      {id:3,tilte:'Product C'}
    ]
  )
})
// 端口监听
app.listen(3000)