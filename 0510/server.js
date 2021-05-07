const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.get('/user',(req,res)=>{
    res.send("hello user");
}

app.listen(3000,()=>{
    console.log('server start port 3000');
});