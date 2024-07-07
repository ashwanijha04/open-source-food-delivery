const cartService = require('../services/cartService');

const getCart = async (req, res) => {
  try {
    const cart = await cartService.getCart();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await cartService.updateCart(req.body);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const clearCart = async (req, res) => {
  try {
    const cart = await cartService.clearCart();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCart,
  updateCart,
  clearCart
};
