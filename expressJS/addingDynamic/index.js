const express=require('express');
const app=express();


//to set the view engine

app.set('view engine','hbs');

//template engine root

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(5849,()=>{
    console.log('listening');
})