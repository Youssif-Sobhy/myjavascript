const http=require('http');
const fs=require('fs');
// create server

htmlfile=fs.readFileSync('./templates/index.html','utf-8')

const server=http.createServer((request,response)=>{

    response.end(htmlfile)
    console.log(" a new req received")
})



// start server
server.listen(8000,"127.0.0.1",()=>{
    console.log("server starting successfully")
})



