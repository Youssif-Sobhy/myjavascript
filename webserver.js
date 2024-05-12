const http=require('http');
const fs=require('fs');
// create server

htmlfile=fs.readFileSync('./templates/index.html','utf-8')

const server=http.createServer((request,response)=>{


    // response.end(htmlfile)

    // console.log(" a new req received")

    //to handle routes
    let path=request.url;
    console.log(path)
    if (path.toLocaleLowerCase()==='/home' || path==='/'){
        response.end(htmlfile.replace('{{%CONTENT%}}',"this is home page it will only show if you visit home page"));
    }
    else if (path==='/about'){
        response.end(htmlfile.replace('{{%CONTENT%}}',"this is about page it will only show if you visit about page"));
    }
    else{
        response.end("bad request");
    }

})



// start server
server.listen(8000,"127.0.0.1",()=>{
    console.log("server starting successfully")
})



