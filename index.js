var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World. Please Please Please chal jaa aaa!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
