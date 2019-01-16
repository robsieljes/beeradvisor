const express = require('express');
const router = express.Router();

// App routes.
const pages = require('./pages');
const user = require('./user');

router.get('/pages/:name?', pages);
router.get('/user/:name?', user);

// router.post('/login', login);
// router.post('/signup', signUp);

module.exports = router;