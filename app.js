var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var contactController = require("./controllers/contactController");

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.set("view engine", "hbs")
app.listen(3000, function(){
  console.log("app is working on localhost 3000");
});

app.get("/contact", contactController.index);
app.get("/new", function(req, res){
  res.render("contact/new",{});
});
app.post("/contact", contactController.create);
