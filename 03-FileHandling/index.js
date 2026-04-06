const { time } = require("console");
const fs = require("fs");
// console.log(fs)

//we use 
//import fs from "fs/promises"
// to use the asyn function without using callback but using async and await


//sync
//1. create a file
// fs.writeFileSync("./test.txt","hello from writeFileSync");

// 2. append in a file
// fs.appendFileSync("./test.txt",`\nhello ${Date()}`)

// 3. read a file
// const result  = fs.readFileSync("./test.txt","utf-8")
// console.log(result); //output is 
// hello from writeFileSynchello Mon Apr 06 2026 14:39:33 GMT+0530 (India Standard Time)hello Mon Apr 06 2026 14:39:45 GMT+0530 (India Standard Time)hello Mon Apr 06 2026 14:39:49 GMT+0530 (India Standard Time)
// hello Mon Apr 06 2026 14:40:09 GMT+0530 (India Standard Time)
// hello Mon Apr 06 2026 14:40:17 GMT+0530 (India Standard Time)

// sync is always blocking operation, here all the task will be blocked until this sync task is completed

//async
// for async we complesory need to write the callback to avoid callBack then use fs/promises which uses async and await

// 1.create a file
// fs.writeFile("./async.txt",`hello everyone`,(err)=>{
//   if(err)console.log(err);
//     })

// 2.append in a file
//  fs.appendFile("./async.txt",`\n ${Date()}`,(err)=>{
//   if(err)console.log(err)
//  })

//  3.read a file 
// fs.readFile("./async.txt","utf-8",(err,data)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data)
//   }
// })

//output is 
// hello everyone
//  Mon Apr 06 2026 14:52:11 GMT+0530 (India Standard Time)

//delete a file
// fs.unlink("./async",(err)=>err)

// create a directory
// fs.mkdir("rootDir",(err)=>err)