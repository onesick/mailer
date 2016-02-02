var mongoose = require("./connection");
var ContactModel = require('../models/contact');

// remove previous data
ContactModel.remove({}, function(err){
  console.log(err);
})

// example seeds data
var wonsik1 = new ContactModel({name: "Wonsik1", contact_number: "571-213-0040", email: "wsjeong21@hotmail.com", address: "2729 gallows rd, vienna, va, 22180", model_number: "exampleModel1", serial_number: "exampleSerial1", purchase_date: "01-01-2016", message: "testing"}).save();
var wonsik2 = new ContactModel({name: "Wonsik2", contact_number: "571-213-0040", email: "wsjeong21@hotmail.com", address: "2729 gallows rd, vienna, va, 22180", model_number: "exampleModel2", serial_number: "exampleSerial2", purchase_date: "01-01-2016", message: "testing2"}).save();
var wonsik3 = new ContactModel({name: "Wonsik3", contact_number: "571-213-0040", email: "wsjeong21@hotmail.com", address: "2729 gallows rd, vienna, va, 22180", model_number: "exampleModel3", serial_number: "exampleSerial3", purchase_date: "01-01-2016", message: "testing3"}).save();
var wonsik4 = new ContactModel({name: "Wonsik4", contact_number: "571-213-0040", email: "wsjeong21@hotmail.com", address: "2729 gallows rd, vienna, va, 22180", model_number: "exampleModel4", serial_number: "exampleSerial4", purchase_date: "01-01-2016", message: "testing4"}).save();
var wonsik5 = new ContactModel({name: "Wonsik5", contact_number: "571-213-0040", email: "wsjeong21@hotmail.com", address: "2729 gallows rd, vienna, va, 22180", model_number: "exampleModel5", serial_number: "exampleSerial5", purchase_date: "01-01-2016", message: "testing5"}).save();
