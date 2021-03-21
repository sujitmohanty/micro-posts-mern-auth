const express = require('express');
const router = express.Router();

const { signIn, signUp } = require('../controllers/user');

router.route('/users/signin').post(signIn);
router.route('/users/signup').post(signUp);

module.exports = router;
