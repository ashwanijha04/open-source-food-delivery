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

module.exports = {
  getAllRestaurants,
  createRestaurant,
};
