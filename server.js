// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./routes/index.js');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// set up root route to respond with 'hi sexy!'
app.get('/', function (req, res) {
  res.send('hi sexy!');
});

// set up express application
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

//set up routes
routes(app);

// listen on port 3000
app.listen(3000, function () {
  console.log('happy ending only happen.... on localhost:3000');
});