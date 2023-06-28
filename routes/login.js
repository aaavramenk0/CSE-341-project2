const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login');

router.post('/login', authorController.loginUser);



module.exports = router;