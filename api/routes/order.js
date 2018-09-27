const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'Order were fetchd !'
    });
});

router.post('/', (req, res, next) => {
    const order = new order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order.save()
        .then(resutl => {
            console.log(resutl);
            res.status(201).json(resutl);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

module.exports = router;