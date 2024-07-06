const restaurantService = require('../services/restaurantService');

// @desc Get all restaurants
// @route GET /api/restaurants
// @access Public
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantService.getAllRestaurants();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create a restaurant
// @route POST /api/restaurants
// @access Public
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
