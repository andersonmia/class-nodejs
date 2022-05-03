let http = require('http');
let tell = require('./createModule');


http.createServer(function (req,res){
console.log(tell());
res.writeHead(200,{"content-type":"text/html"});
res.write("The date of today and the time respectively are:" + tell());
res.end();
}).listen(2000);