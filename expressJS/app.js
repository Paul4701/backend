const express =require('express')
const app = express();

// app.get('/',(req,res)=>{
//     res.send('helloo')
// })

// app.listen(6788,()=>{
//     console.log("hii")
// })



// Routing in express 
app.get('/www.pintu.com/about',(req,res)=>{
    res.status(400).send('about pge')
})
app.get('/www.pintu.com',(req,res)=>{
    res.send('home pge')
})

app.get('/www.pintu.com/contact',(req,res)=>{
    res.send('about pge')
})

app.listen(6788,()=>{
    console.log('listening ')
})