const db = require('../models');
const Recipe = db.recipe;

exports.createRecipe = (req, res) => {  
    const recipe = new Recipe(req.body);
    recipe
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the recipe.'
        });
      });
};
  
exports.getAll = (req, res) => {
Recipe.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving recipes.'
    });
    });
};

exports.getRecipe = (req, res) => {
const _id = req.params._id;
Recipe.find({ _id: _id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving recipe.'
    });
    });
};