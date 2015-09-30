var express = require('express');
var app = express();
var models = require('./models');

app.use('/bower_components',
  express.static(__dirname + '/bower_components'));

app.use('/public', express.static(__dirname + '/public'))

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  //res.send('Hello world!');
  res.render('index');
});

var cookieParser = require('cookie-parser');
var session = require('express-session');

var Sequelize = require('sequelize');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var sequelize = new Sequelize(
  "database",
  "username",
  "password", {
    "dialect": "sqlite",
    "storage": "./store/session.sqlite"
  });

var store = new SequelizeStore({ db: sequelize });
store.sync();

app.use(cookieParser());
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: 'I see dead people',
  store: store
}));

app.use(require('flash')());

app.get('/game', function(req, res) {
    var playerName = req.session.playerName;
    res.render('game', { username: playerName });
});

app.post('/game', function(req, res) {
    req.session.playerName = req.body.username;
    req.session.save(function() {
        res.redirect('/game');
    });
});
  // console.log(req.query);
  // res.send("Hi " + req.query.username);

  app.get('/register', function(req, res) {
    res.render('register');
  });

  app.post('/register', function(req, res) {
    // req.body.username, req.body.password are the fields we're getting on the post
    // to see if the user already exists, do the following:
    models.User.find({ where: { username: req.body.username }})
      .then(function(user) {
         if (user) {
          req.flash('warning', "Username already exists");
          req.session.save(function() {
            res.redirect('/register');
          });
        } else {
          models.User.create(req.body)
            .then(function(newUser) {
              req.session.user_id = newUser.id;
              // previous line adds username to session
              req.session.save(function() {
                res.redirect('/games');
              });
          });
        }
      });
    // res.send(JSON.stringify(req.body));
  });

  app.get('/login', function(req, res) {
    res.render('login');
  });

  // app.post('/login', function(req, res) {
  //   
  // }

  app.get('/users', function(req, res) {
      models.User.findAll().then(function(users1) {
          res.render('users', { users: users1 });
      });
  });

  app.get('/games', function(req, res) {
      models.Board.findAll().then(function(boards) {
          res.render('games', { boards: boards });
      });
  });
//posts at http://localhost:3000/games

  app.get('/games/:game_id', function(req, res) {
    models.Board.findById(req.params.game_id).then(function(board) {
        res.render('individualGame', { board: board });
    });
});

app.post('/games', function(req, res) {
    models.Board.create({ board: req.body.board })
        .then(function(board) {
            res.redirect('/games/' + board.id);
          })
        .catch(function(errors) {
          models.Board.findAll().then(function(boards) {
            res.render('games', { boards: boards, errors: errors });
          });
          // res.send(JSON.stringify(errors))
        });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
