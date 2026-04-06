const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `new request from url ${req.url} at ${Date.now()}\n`;
    fs.appendFile("./log.txt",`${log}`,(err)=> err)
    switch(req.url){
      case "/" : 
        res.end("hello you are on homepage");
        break;
      case "/about":
        res.end("you just opened the about page");
        break;
      default:
        res.end("404 page not found");
    }
    
  })

myServer.listen(8000,()=>console.log(`server started`))