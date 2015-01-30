var http=require('http');
http.createServer(function(req,res)
{
res.writeHead(200);
res.end('Hello World');
}).listen(3007);
console.log('Server started on port 3007');
