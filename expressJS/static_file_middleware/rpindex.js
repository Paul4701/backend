const express=require('express')
const app=express();
const path=require('path')
//built in middleware

app.use(express.static(path.join))

app.get('/',(req,res)=>{
 res.send('hello')
});

app.listen(4517,()=>{
    console.log('listening')
})