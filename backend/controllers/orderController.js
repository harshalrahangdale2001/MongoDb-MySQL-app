import {Order} from '../models/order';
import {User} from '../models/user';
const mongoose = require('mongoose');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, productIds, totalAmount } = req.body;

    // Verify if user exists in MySQL
    User.findUserById(userId, (err, user) => {
      if (err) return res.status(400).json({ error: err.message });
      if (!user) return res.status(404).json({ error: 'User not found' });

      const order = new Order({ userId, productIds, totalAmount });
      order.save((err, savedOrder) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json(savedOrder);
      });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('productIds');
    if (!order) return res.status(404).json({ error: 'Order not found' });

    // Fetch user details from MySQL
    User.findUserById(order.userId, (err, user) => {
      if (err) return res.status(400).json({ error: err.message });
      if (!user) return res.status(404).json({ error: 'User not found' });

      res.status(200).json({ ...order.toObject(), user });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  try {
    const { userId, productIds, totalAmount } = req.body;

    // Verify if user exists in MySQL
    User.findUserById(userId, (err, user) => {
      if (err) return res.status(400).json({ error: err.message });
      if (!user) return res.status(404).json({ error: 'User not found' });

      Order.findByIdAndUpdate(req.params.id, { userId, productIds, totalAmount }, { new: true, runValidators: true }, (err, updatedOrder) => {
        if (err) return res.status(400).json({ error: err.message });
        if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json(updatedOrder);
      });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    Order.findByIdAndDelete(req.params.id, (err, deletedOrder) => {
      if (err) return res.status(400).json({ error: err.message });
      if (!deletedOrder) return res.status(404).json({ error: 'Order not found' });

      res.status(200).json({ message: 'Order deleted successfully' });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
