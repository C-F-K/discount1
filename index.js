var express = require("express");
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var port = Number(process.env.PORT || 5000);

http.listen(port, function(){
  console.log('listening on *:' + port);
});