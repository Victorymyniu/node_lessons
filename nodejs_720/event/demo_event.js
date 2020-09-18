// nodejs的事件
var _events = require('events')
// EventEmitter类的一个实例
var _EventEmitter = new _events.EventEmitter()
// 这里的事件名，完全不同于浏览器上的各种事件
// 完全就是一个标识，它其实是绑定了一个回调函数
_EventEmitter.on('niu123',function(){
  console.log('niu123事件被触发')
  _EventEmitter.emit('tong456')
})
// _EventEmitter.on('tong456',function(){
//   console.log('tong456事件被触发')
// })

_EventEmitter.on('tong456',xx456fn)

function xx456fn(){
  console.log('tong456事件被触发')
}
// 触发一个事件
_EventEmitter.emit('niu123')

console.log(_events,111)
console.log(_EventEmitter,222)