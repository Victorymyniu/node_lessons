var eventEmitter = require('events').EventEmitter
var event = new eventEmitter()
event.on('timeout',function(){
  console.log('timeout事件被触发')
})
setTimeout(()=>{
  event.emit('timeout')
},2000)
console.log(event)