const express=require('../node_modules/express/lib/express')
const app =express();
const path=require('path')
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.listen(4343,()=>{
    console.log('listening')
})