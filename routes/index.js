const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/recipes', require('./recipes'));
router.use('/authors', require('./authors'));

router.use('/login', require('./login'))
router.use('/signup', require('./signup'))

module.exports = router;