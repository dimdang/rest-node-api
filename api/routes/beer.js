const express = require('express');
const router = express.Router();
const BeerController = require('../controller/beer');

router.get('/', BeerController.getBeers);
router.post('/', BeerController.postBeers);

module.exports = router;