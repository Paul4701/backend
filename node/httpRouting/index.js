const http=require('http');
const fs=require('fs');
// const { json } = require('stream/consumers');
// const { dirname } = require('path/posix')
const server = http.createServer((req,res)=>{
  console.log(req.url)
  if(req.url=='/data'){
  fs.readFile("./userApi/userApi.json","utf-8",(err,data)=>{
   console.log(data,err)
     res.send(data)
  })
}else{
      res.send('hio')
  }
})

server.listen(4222,'127.0.0.1',()=>{
    console.log('listening')
})