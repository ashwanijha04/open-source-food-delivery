const Dish = require('../models/dishModel');

// Fetch all dishes for a restaurant
const getDishesByRestaurant = async (restaurantId) => {
  try {
    const dishes = await Dish.find({ restaurantId });
    return dishes;
  } catch (err) {
    throw new Error('Error fetching dishes');
  }
};

// Create a new dish for a restaurant
const createDish = async (restaurantId, dishData) => {
  const { name, description, price } = dishData;

  if (!name || !description || !price) {
    throw new Error('Please provide all required fields');
  }

  const dish = new Dish({
    name,
    description,
    price,
    restaurantId
  });

  try {
    const newDish = await dish.save();
    return newDish;
  } catch (err) {
    throw new Error('Error creating dish');
  }
};

// Update a dish
const updateDish = async (id, dishData) => {
  const { name, description, price } = dishData;

  if (!name || !description || !price) {
    throw new Error('Please provide all required fields');
  }

  try {
    const dish = await Dish.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!dish) {
      throw new Error('Dish not found');
    }

    return dish;
  } catch (err) {
    throw new Error('Error updating dish');
  }
};

// Delete a dish
const deleteDish = async (id) => {
  try {
    const dish = await Dish.findByIdAndDelete(id);

    if (!dish) {
      throw new Error('Dish not found');
    }

    return dish;
  } catch (err) {
    throw new Error('Error deleting dish');
  }
};

module.exports = {
  getDishesByRestaurant,
  createDish,
  updateDish,
  deleteDish
};
