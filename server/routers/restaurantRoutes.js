const express = require('express');
const {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController');
const router = express.Router();

// @route GET /api/restaurants
// @desc Get all restaurants
// @access Public
router.get('/', getRestaurants);

// @route POST /api/restaurants
// @desc Create a new restaurant
// @access Public
router.post('/', createRestaurant);

// @route PUT /api/restaurants/:id
// @desc Update a restaurant
// @access Public
router.put('/:id', updateRestaurant);

// @route DELETE /api/restaurants/:id
// @desc Delete a restaurant
// @access Public
router.delete('/:id', deleteRestaurant);

module.exports = router;
