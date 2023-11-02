const http = require('http');
const{createFun,readFun,updateFun,deletfun}=require('./newModule')
const server = http.createServer(function(req, res){
    console.log(req.method, req.url);
if(req.url=='/create'){
res.write(JSON.stringify(createFun(19)))
}
else if(req.url=='/read'){
    res.write(JSON.stringify(readFun()))
}
else if(req.url=='/update'){
    res.write(JSON.stringify(updateFun(0,100)))

}
else if(req.url=='/delelte'){
    res.write(JSON.stringify(deletfun(0)))

}
     res.end()
})

server.listen(5000, function(){
    console.log("server running on port 5000!")
})