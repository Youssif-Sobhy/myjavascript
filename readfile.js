const fs= require('fs');

// node run sync meaning that its one thread for any process 
// so we use async to make a function that take time in the background to run all lines without any delays and faster


fs.readFile("./text.txt","utf-8",(error,data1)=>{
    console.log(data1)
})

console.log("reading file ")