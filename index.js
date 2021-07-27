const express = require('express');
const app = express();

const placeHolder = 'CI/CD is amazing.';
const htmlString = `
  <h1>${placeHolder}</h1>
  <h2>Just Another Demo</h2>
`

app.get('/', function (req, res) {
  res.send(htmlString);
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
