var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var contactController = require("./controllers/contactController");

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.set("view engine", "hbs")

app.get("/contact", contactController.index);
app.get("/new", function(req, res){
  res.render("contact/new",{});
});
app.post("/contact", contactController.create);


// app.all('/*', function(req, res, next) {
//  // CORS headers
//  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//  // Set custom headers for CORS
//  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//  if (req.method == 'OPTIONS') {
//    res.status(200).end();
//  } else {
//    next();
//  }
// });

app.all('/api/v1/*', [/*bodyParser,*/ require('./middleware/jwtauth')]);
app.use('/', require('./router'));

// if the route is not found, throw a 404 error
app.use(function(req, res, next){
  var err = new Error ('Not found');
  err.status = 404;
  next(err);
});

// localhost server
app.listen(3000, function(){
  console.log("app is working on localhost 3000");
});
