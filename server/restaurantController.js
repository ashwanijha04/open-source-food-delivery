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

// @desc Update a restaurant
// @route PUT /api/restaurants/:id
// @access Public
exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete a restaurant
// @route DELETE /api/restaurants/:id
// @access Public
exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantService.deleteRestaurant(req.params.id);
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
