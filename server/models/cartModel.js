const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: [
    {
      dish: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' },
        name: String,
        description: String,
        price: Number
      },
      quantity: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
