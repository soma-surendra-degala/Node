const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res)=>{

    //lodash

    const num = _.random(1,20);
    console.log(num)


    const greet = _.once(()=>{
        console.log("Hii")
    })

    greet();
     greet();
      greet();

    // console.log(req.url,req.method)

        // Set Header TEXT

    // res.setHeader('Content-Type','text/plain');
    // res.write('Hey');
    // res.end();

        // Set Header HTML

    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hii</h1>');
    // res.end();

        // Set Header File

    // res.setHeader('Content-Type','text/html')
    // fs.readFile('./Views/index.html',(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })

        // Routing in Files

    res.setHeader('Content-Type','text/html');

    let path='./Views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        case '/about-us':
            res.statusCode=301;
            res.setHeader('location','/about')
            res.end()

        default:
            path += '404.html';
            res.statusCode=404;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(res);
            res.end()
        }else{
            res.end(data)
        }
    })

    


});

server.listen(3500,'localhost',()=>{
    console.log('Listening to 3500')
})
