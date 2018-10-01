const express = require('express');
const router = express.Router();
const ProductsController = require('../controller/product');

router.get('/', ProductsController.get_all_products);
router.post('/', ProductsController.create_products);
router.patch('/:productId', ProductsController.update_product);
router.delete('/:productId', ProductsController.delete_product);

module.exports = router;