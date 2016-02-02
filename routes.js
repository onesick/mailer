
var mongoose = require("mongoose");
mongoose.connect('mongodb:/Users/wonsikjeong/wdi/projects/node_mailer/mongodb');

module.exports = {
  people: function(req, res){
    var People = mongoose.model('People', {name: String});
    
  }
}
