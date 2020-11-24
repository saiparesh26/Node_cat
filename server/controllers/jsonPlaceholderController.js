const axios = require('axios');
const logger = require('../middleware/logger');
const { JSONPLACEHOLDER_URL } = require('../config/dbURL');
const url = JSONPLACEHOLDER_URL;

// Description      Get all posts
// URL              GET http://localhost:5000/posts
const getPosts = (req, res) => {
  let postsData = [];

  axios
    .get(url)
    .then((response) => {
      postsData = response.data;
      console.log(postsData);
      res.status(200).json({
        count: postsData.length,
        data: postsData,
      });
    })
    .catch((err) => {
      logger.info(err);
    });
};

// Description      Get a single post by id
// URL              GET http://localhost:5000/posts/:id
const getPostById = (req, res) => {
  const { id } = req.params;
  let postData = [];

  axios
    .get(`${url}/${id}`)
    .then((response) => {
      postData = response.data;
      console.log(postData);
      res.status(200).json({
        data: postData,
      });
    })
    .catch((err) => {
      if (err.response.status === 404) {
        const error = {
          error: 'Invalid ID',
          id,
        };
        logger.info('Invalid request : ', error);

        res.status(404).json({ message: 'Not Found 404' });
      }
    });
};

// Description      Create a single post
// URL              GET http://localhost:5000/posts
const createPost = (req, res) => {
  const { title, body, userId } = req.body;
  const postData = { title, body, userId };

  const headers = {
    'Content-Type': 'application/json',
  };

  axios
    .post(url, postData, {
      headers: headers,
    })
    .then((response) => {
      res.status(201).json({
        data: response.data,
      });
    })
    .catch((err) => {
      logger.info(err);
    });
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
};
