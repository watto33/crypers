var express = require('express'),
    port = process.env.port || 3000,
    app = express();
    app.listen(port);
    app.get('/', function(req, res){
      res.sendfile(__dirname + '/index.html');
    });