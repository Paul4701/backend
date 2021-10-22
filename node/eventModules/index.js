const EventEmitter=require('events');

const event=new EventEmitter();
 
//aktai event diye multiple function call korte pachi 

event.on('sayMyName',()=>{
    console.log('my name is paul')
})
event.on('sayMyName',()=>{
    console.log('my name is pintu')
})

//amra event a parameters o pass korte pachi

event.on('checkpage',(sc,msg)=>{
    console.log(`your status code is ${sc} and ${msg}`)
})
event.emit('checkpage',200,'ok')
event.emit('sayMyName')