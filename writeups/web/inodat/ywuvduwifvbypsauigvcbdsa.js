const http = require('http');
var express = require('express');
var app = express();


// app.get('/', function (req, res) {
//     res.send('Welcome to "inodat" basic API.');
// });
function ContainsAny(str, items){
  for(var i in items){
      var item = items[i];
      if (str.indexOf(item) > -1){
          return true;
      }

  }
  return false;
}

app.get('/', function (req, res) {
    res.send('<img src="/public/public/Screenshot from 2021-04-12 14-30-45.png">');
});

app.get('/api/', function (req, res) {
  res.send('200 OK');
});

app.get('/api/v1/', function (req, res) {
  res.send('200 OK');
});

app.get('/api/v1/index', function (req, res) {
  res.send('/api/v1/base64e<br>/api/v1/base64d');
});

app.get('/api/v1/base64e', function (req, res) {
  let data = req.query.data;
  let buff = new Buffer(data);
  res.send('Your response is: ' + buff.toString('base64'));
  console.log(req.query.data);
});

app.get('/api/v1/base64d', function (req, res) {
  let data = req.query.data;
  let buff = new Buffer(data, 'base64');
  res.send('Your response is: ' + buff.toString('ascii'));
  console.log(req.query.data);
});


app.get('/api/v2/', function (req, res) {
  res.send('200 OK');
});

app.get('/api/v2/index', function (req, res) {
  res.send('Try harder!');
});

app.get('/api/v3/', function (req, res) {
  res.send('200 OK');
});

app.get('/api/v3/index', function (req, res) {
  res.send('Try harder!');
});

'use strict';
app.get('/api/v1/math', function (req, res) {
    if(ContainsAny(req.query.sum, ['p', 'w', '()', 'exit', 'for'])){
      res.send('Your response is: Try harder!');
    } else {
      res.send('Your response is: ' + eval(req.query.sum));
    }
    console.log(req.query.sum);  
});

app.get('/api/robots.txt', function (req, res) {
  res.send('Yolo file!');
});

app.get('/c99.php', function (req, res) {
  res.send('Are you sure it is PHP?');
});

app.get('/security.txt', function (req, res) {
  res.send('Just google it.');
});

app.use(express.static('public'));

//todo: Avoid file read.
app.use('/public', express.static(__dirname));

const hostname = '0.0.0.0';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  process.stdin.resume(); // to avoid process.exit()
});