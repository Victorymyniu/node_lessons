const express  = require('express')
const app = express();
const cors = require('cors')
// node跨域cors模块
// cors模块实现跨域，这是最简单的配置
app.use(cors())
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