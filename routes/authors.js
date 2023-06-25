const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authors');

router.get('/', authorController.getAll);



module.exports = router;