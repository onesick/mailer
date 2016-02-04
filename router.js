var express = require('express');
var router = express.Router();

var auth = require('./models/auth.js');
var contacts = require('./models/contact.js');
var user = require('./models/users.js');
var products = require('./models/products.js');

// This route can be accessed by anyone
router.post('/login', auth.login);

// routes only accessible by authenticated users
// router.get('URL', function);
// router.post('URL', function);
// router.put('URL', function);
// router.delete('URL', function);

// routes accessible only by authenticated and authorized users
// router.get('URL', function);
// router.post('URL', function);
// router.put('URL', function);
// router.d

/*
* Routes that can be accessed only by autheticated users
*/
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);

/*
* Routes that can be accessed only by authenticated & authorized users
*/
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;
