const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  userId: {
    type: Number, // MySQL user ID
    required: true,
  },
  productIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
