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
