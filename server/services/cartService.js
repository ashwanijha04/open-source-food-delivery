const Cart = require('../models/cartModel');

// Function to get the cart
const getCart = async () => {
  try {
    const cart = await Cart.findOne();
    return cart;
  } catch (err) {
    throw new Error('Error fetching cart');
  }
};

// Function to update the cart
const updateCart = async (cartData) => {
  try {
    const cart = await Cart.findOneAndUpdate({}, cartData, { new: true, upsert: true });
    return cart;
  } catch (err) {
    throw new Error('Error updating cart');
  }
};

// Function to clear the cart
const clearCart = async () => {
  try {
    const cart = await Cart.findOneAndDelete();
    return cart;
  } catch (err) {
    throw new Error('Error clearing cart');
  }
};

module.exports = {
  getCart,
  updateCart,
  clearCart
};
