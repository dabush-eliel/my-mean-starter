// server.js

// modules
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

// configuration

// config files
var db = require('./app/config/dbConfig');

// set our port
var port = process.env.PORT || 8080;

// connect to mongoDB
 mongoose.connect(db.url, function (err, mongo) {
   if (err)
       throw err;
    console.log('***** connected to mongoDB');

    // TODO: ***** SHOULD RUN ONLY ONCE - db.init() ! *****
    // init mongoDB data
    // TODO: uncomment the line below
    // db.init();

 });

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));

// routes
require('./app/routes')(app); // configure our routes

// start app
// startup our app at http://localhost:8080
app.listen(port);

// shout out to the user
console.log('***** Server is running on port: ' + port);

// expose app
exports = module.exports = app;