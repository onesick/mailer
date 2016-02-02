
var mongoose = require('../mongodb/connection.js');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ContactSchema = new Schema({
  name: String,
  contact_number: String,
  email: String,
  address: String,
  model_number: String,
  serial_number: String,
  purchase_date: String,
  message: String
});

var ContactModel = mongoose.model("Contact", ContactSchema);
module.exports = ContactModel;
