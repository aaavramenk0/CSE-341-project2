const db = require('../models');
const Author = db.author;

// GET request that retrieves all authors from a database
module.exports.getAll = (req, res) => {
    try {
      Author.find({}).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving authors.'
        });
      });
    } catch (err) {
      res.status(500).json(err);
    }
}; 