const fs = require('fs');
const http = require('http')

const data = fs.readFileSync('userAPI.json','utf-8');


const server = http.createServer((req,res)=>{
    if (req.url=='/'){
        res.write("home")
        res.end()
    }
    else if (req.url=='/api'){
        res.write(data)
        res.end()
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to 8000")
})