var http = require('http');
var upperCase = require('upper-case');

http.createServer(function(req,res){
    res.writeHead(200,{'content' : 'text/html'});
    res.write(upperCase.upperCase("Hello world!"));
    res.end();
}).listen(8080);

// var fs = require('fs');
// var rs = fs.createReadStream('./demo.txt');
// rs.on('open',function(){
//     console.log ('The file is open!');
// });
