var http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type": "text/html"});
        fs.createReadStream('./newPage.html').pipe(res);
    }

    else if(req.url ==='/server' && req.method == 'POST'){
        var rawData = '';
        req.on('data',function(data){
            rawData += data;
    })
        req.on('end',function(){
            var inputdata = new URLSearchParams(rawData);
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write('Data 1: ' +inputdata.get('Pname') + '<br>');
            res.write('Data 2: ' +inputdata.get('PRegno') + '<br>');
            res.end();
        });
    }
});

server.listen(2000,function(){
    console.log('listening at 2000')
});