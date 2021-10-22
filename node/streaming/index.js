const fs=require('fs')
const http=require('http')
const server=http.createServer();
server.on('request',(req,res)=>{
 
    const rstream=fs.createReadStream('note.txt');
    rstream.on('data',(chunkdata)=>{
        console.log(chunkdata)
      res.write(chunkdata)
    
    })
    rstream.on('end',()=>{
        console.log('end')
        res.end();
    })
    rstream.on('error',(err)=>{
        console.log(err)
    })
   
})

server.listen(4232,'127.0.0.1',()=>{
    console.log('listening')
})