const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create an order
router.post('/orders', orderController.createOrder);

// Get an order by ID
router.get('/orders/:id', orderController.getOrderById);

// Update an order
router.put('/orders/:id', orderController.updateOrder);

// Delete an order
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
