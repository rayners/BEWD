var express = require('express');
var app = express();

app.use('/bower_components',
  express.static(__dirname + '/bower_components'));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  //res.send('Hello world!');
  res.render('indextic');
});
//
// app.get('/game', function(req, res) {
//   res.render('game', req.query);

  // console.log(req.query);
  // res.send("Hi " + req.query.username);
// });


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
