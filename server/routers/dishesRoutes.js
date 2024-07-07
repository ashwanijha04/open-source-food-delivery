const express = require('express');
const router = express.Router();
const {
  getDishesByRestaurant,
  createDish,
  updateDish,
  deleteDish
} = require('../controllers/dishesController');

// Route to get all dishes for a specific restaurant
router.get('/:restaurantId/dishes', getDishesByRestaurant);

// Route to create a new dish for a specific restaurant
router.post('/:restaurantId/dishes', createDish);

// Route to update a dish
router.put('/dishes/:id', updateDish);

// Route to delete a dish
router.delete('/dishes/:id', deleteDish);

module.exports = router;
