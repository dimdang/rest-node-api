const express = require('express');
const router = express.Router();
const OrderController = require('../controller/order');

router.get('/', OrderController.orders_get_all);
router.post('/', OrderController.create_order);

module.exports = router;