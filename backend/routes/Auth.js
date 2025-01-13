const express = require('express');
const router = express.Router();

//controllers
const { signup, login, verifyotp} = require('../controllers/Auth');

//middlewares
const { auth } = require('../middlewares/middle');

//routes
router.post('/signup', signup);
router.post('/login', login);

// router.get('/logout', logout);

module.exports = router;