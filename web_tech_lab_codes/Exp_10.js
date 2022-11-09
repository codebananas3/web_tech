var http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
if(req.url==='/'){
res.writeHead(200,{"Content-Type": "text/html"});
fs.createReadStream('./Exp_10.html').pipe(res);
}
else if(req.url ==='/server' && req.method == 'POST'){
var rawData = '';
req.on('data',function(data){
rawData += data;
})
req.on('end',function(){
var inputdata = new URLSearchParams(rawData);
res.writeHead(200,{"Content-Type": "text/html"});
res.write('<h1 style="text-decoration: underline;color:blue;text-align:center;">User Submitted Details </h1><br>');
res.write('<table border=1 cellspacing=0 style="color:blue;text-align:center;margin-left:auto;margin-right:auto;">');
res.write('<tr><td>Name</td><td>'+inputdata.get('username')+'</td></tr>');
res.write('<tr><td>Password</td><td>'+inputdata.get('password')+'</td></tr>');
res.write('<tr><td>Age</td><td>'+inputdata.get('age')+'</td></tr>');
res.write('<tr><td>Mobile Number</td><td>'+inputdata.get('phone')+'</td></tr>');
res.write('<tr><td>Gender</td><td>'+inputdata.get('gender')+'</td></tr>');
res.write('<tr><td>State</td><td>'+inputdata.get('state')+'</td></tr>');
res.write('<tr><td>Skills</td><td>'+inputdata.get('sk1')+' '+inputdata.get('sk2')+' '+inputdata.get('sk3')+'</td></tr>');
res.end();
});
}
});
server.listen(9000,function(){
console.log('listening at 9000')
});