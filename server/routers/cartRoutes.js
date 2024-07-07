const express = require('express');
const router = express.Router();
const { getCart, updateCart, clearCart } = require('../controllers/cartController');

router.get('/cart', getCart);
router.post('/cart', updateCart);
router.delete('/cart', clearCart);

module.exports = router;
