const axios = require('axios');
const logger = require('../middleware/logger');
const { CAT_URL } = require('../config/dbURL');
const url = CAT_URL;

// Description        Get All cats from server
// URL                GET http://localhost:5000/cats
const getAllCats = (req, res) => {
  let catData = [];

  axios
    .get(url)
    .then((response) => {
      catData = response.data.all;
      console.log(catData);
      res.json({
        count: catData.length,
        data: catData,
      });
    })
    .catch((err) => logger.info(err));
};

// Description        Get a single cat from server
// URL                GET http://localhost:5000/cats/:id
const getSingleCat = (req, res) => {
  const { id } = req.params;
  let catData = [];

  axios
    .get(url)
    .then((response) => {
      catData = response.data.all;
      const result = catData.filter((cat) => cat._id === id);
      if (result.length === 0) {
        const error = {
          method: req.method,
          URL: req.originalUrl,
          error: 'Invalid Cat ID',
          id,
        };
        logger.info('Invalid request : ', error);

        return res
          .status(400)
          .json({ message: 'Bad Request. Wrong Cat Id entered' });
      }
      console.log(result);
      res.json(result);
    })
    .catch((err) => logger.info(err));
};

module.exports = {
  getAllCats,
  getSingleCat,
};
