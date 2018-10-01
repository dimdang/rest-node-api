const Order = require('../models/order');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

exports.orders_get_all = (req, res, next) => {
    Order.find()
        .select('_id quantity product')
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}

exports.create_order = (req, res, next) => {
    const order = new Order({
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
}