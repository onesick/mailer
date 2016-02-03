var jwt = require('jwt-simple');

var auth = {
  login: function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username === '' || password === ''){
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid Credentials"
      });
      return;
    }

// validate the user credentail and return 401 if wrong
    var user = auth.validate(username, password);

    if (!user) {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid Credentials"
      });
      return;
    }

// generate token and respond as json datatype if the user is validated
    if(user) {
      res.json(genToken(user));
    }
  }, //end of login function

  validate: function(username, password){

    // assuming the validate was successful and DB returns userDATA obj
    var userData = {
      name: 'wonsik jeong',
      role: 'admin',
      username: 'onesick'
    };
    return userData;
  },

  validateUser: function(key){

    // assuming the validate was successful and DB returns userDATA obj. This step is for validating user role.
    var userData = {
      name: 'wonsik jeong',
      role: 'admin',
      username: 'onesick'
    };
    return userData;
  },

  function genToken(user){
    var expires = expiresIn(7);
    var token = jwt.encode({
      exp: expires,
      user: user
    }, require('../config/secret')());

    return {
      token: token,
      expires: expires,
      user: user
    };
  }

  // expiration from today's date calculator
  function expiresIn(days) {
    var currentDate = new Date();
    return currentDate.setDate(currentDate.getDate() + days);
  }
}

module.exports = auth;
