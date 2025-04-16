const express = require('express');
const router = express.Router();
const { extractOrderId } = require('./nlp/nlpProcessor');

router.post('/', (req, res) => {
  const { message } = req.body;
  const orderId = extractOrderId(message);

  const orders = [
    { id: '12345', item: 'Sneakers', status: 'Shipped' },
    { id: '67890', item: 'Music Box', status: 'Out for Delivery' },
  ];

  const order = orders.find(o => o.id === orderId);

  if (order) {
    res.json({ success: true, order });
  } else {
    res.status(404).json({ success: false, message: 'Order not found' });
  }
});

module.exports = router;
