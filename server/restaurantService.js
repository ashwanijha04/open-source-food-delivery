const Restaurant = require('../models/restaurantModel');

// Fetch all restaurants
const getAllRestaurants = async () => {
  try {
    const restaurants = await Restaurant.find();
    return restaurants;
  } catch (err) {
    throw new Error('Error fetching restaurants');
  }
};

// Create a new restaurant
const createRestaurant = async (restaurantData) => {
  const { name, address, cuisine, rating, imageUrl } = restaurantData;

  if (!name || !address || !cuisine || !rating || !imageUrl) {
    throw new Error('Please provide all required fields');
  }

  try {
    const newRestaurant = new Restaurant({
      name,
      address,
      cuisine,
      rating,
      imageUrl,
    });

    const restaurant = await newRestaurant.save();
    return restaurant;
  } catch (err) {
    throw new Error('Error creating restaurant');
  }
};

// Update a restaurant
const updateRestaurant = async (id, restaurantData) => {
  const { name, address, cuisine, rating, imageUrl } = restaurantData;

  if (!name || !address || !cuisine || !rating || !imageUrl) {
    throw new Error('Please provide all required fields');
  }

  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      id,
      { name, address, cuisine, rating, imageUrl },
      { new: true, runValidators: true }
    );

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    return restaurant;
  } catch (err) {
    throw new Error('Error updating restaurant');
  }
};

// Delete a restaurant
const deleteRestaurant = async (id) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(id);

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    return restaurant;
  } catch (err) {
    throw new Error('Error deleting restaurant');
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
