const dishService = require('../services/dishService');

// Fetch all dishes for a restaurant
const getDishesByRestaurant = async (req, res) => {
  try {
    const dishes = await dishService.getDishesByRestaurant(req.params.restaurantId);
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new dish for a restaurant
const createDish = async (req, res) => {
  const { restaurantId } = req.params;
  const { name, description, price } = req.body;

  try {
    const newDish = await dishService.createDish(restaurantId, { name, description, price });
    res.status(201).json(newDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a dish
const updateDish = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const updatedDish = await dishService.updateDish(id, { name, description, price });
    res.status(200).json(updatedDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a dish
const deleteDish = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDish = await dishService.deleteDish(id);
    res.status(200).json(deletedDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getDishesByRestaurant,
  createDish,
  updateDish,
  deleteDish
};
