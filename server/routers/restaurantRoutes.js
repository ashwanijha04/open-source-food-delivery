const express = require('express');
const { getRestaurants, createRestaurant } = require('../controllers/restaurantController');
const router = express.Router();

// @route GET /api/restaurants
// @desc Get all restaurants
// @access Public
router.get('/', getRestaurants);

// @route POST /api/restaurants
// @desc Create a new restaurant
// @access Public
router.post('/', createRestaurant);

module.exports = router;
