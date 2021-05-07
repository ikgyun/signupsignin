const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.get('/login',(req,res)=>{
    res.setD('asdfasdf')
});

app.listen(3000,()=>{
    console.log('server start port 3000');
});