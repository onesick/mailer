var ContactModel = require('../models/contact');
var connection = require('../mongodb/connection.js');


var contactController = {
  index: function(req, res){
    ContactModel.find({}, function(err, docs){
      res.render('contact/index', {contact: docs})
    });
  },
  create: function(req, res){
    var contact = new ContactModel({name: req.body.name, contact_number: req.body.contact_number, email: req.body.email, address: req.body.address, model_number: req.body.model_number, serial_number: req.body.serial_number, purchase_date: req.body.purchase_date, message: req.body.message});
    contact.save(function(err){
      if (!err){
        res.redirect("../contact");
      }
    });
  }
};

module.exports = contactController;
