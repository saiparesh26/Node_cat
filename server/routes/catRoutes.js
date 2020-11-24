const { Router } = require('express');
const { getAllCats, getSingleCat } = require('../controllers/catController');

const router = Router();

// GET All cats
router.route('/').get(getAllCats);

// Get a single cat
router.route('/:id').get(getSingleCat);

module.exports = router;
