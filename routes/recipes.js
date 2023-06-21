const express = require('express');
const router = express.Router();

const recipesController = require('../controllers/recipes');

router.get('/', recipesController.getAll);
router.get('/:_id', recipesController.getRecipe);

router.post('/', recipesController.createRecipe);

module.exports = router;