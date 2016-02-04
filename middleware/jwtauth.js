var jwt = require('jwt-simple');
var validateUser = require('../models/auth').validateUser;

module.exports = function(req, res, next){
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];


  if (token) {
    try {
      var decoded = jwt.decode(token, require('../config/secret')());

      if (decoded.exp <= Date.now()){
        res.status(400);
        res.json({
          "status": 400,
          "message": "Token Expired"
        });
        return;
      }

      var user = validateUser(decoded.user.username);
      if (user){
        if ((req.url.indexOf('admin') >= 0 && user.role === 'admin') || (req.url.indexOf('admin') < 0 && req.url.indexOf('/api/v1/') >= 0)){
          next();
        } else {
        res.status(403);
        res.json({
          "status": 403,
          "message": "Not Authorized"
        });
        return;}
      } else {
        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid User"
        });
        return;
      }
    } catch (err) {
      res.status(500);
      res.json({
        "status": 500,
        "message": "Oops something went wrong",
        "error": err
      });
    }
    } else {
      res.status(401);
      res.json({
      "status": 401,
      "message": "Invalid Token or Key"
      });
      return;
    }
  }
