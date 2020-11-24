const { Router } = require('express');
const {
  getPosts,
  getPostById,
  createPost,
} = require('../controllers/jsonPlaceholderController');

const router = Router();

router.route('/').get(getPosts).post(createPost);

router.route('/:id').get(getPostById);

module.exports = router;
