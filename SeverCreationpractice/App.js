const express=require('express');
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{res.send('requst for sever')});
app.get('/home',(req,res)=>{res.send('requst for home')});
app.get('/about',(req,res)=>{res.send('requst for about')});
app.post('/about',(req,res)=>{
    console.log(req.body)
    res.send('requst for post in about')});


app.listen(3500)
