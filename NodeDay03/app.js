const express =require('express');

const app = express();

app.listen(300,()=>{
    console.log("Server 300 started")
});

// app.get('/',(req,res)=>{
//     res.send('<h1>Hii This is Express</h1>')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>Hii This is Express</h1>')
// })
app.get('/',(req,res)=>{
    res.sendFile('./Views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile('./Views/about.html',{root:__dirname})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.use('/',(req,res)=>{
    res.status(404).sendFile('./Views/404.html',{root:__dirname})
})