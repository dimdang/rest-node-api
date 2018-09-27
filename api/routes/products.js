const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
        .select("_id name price")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs
            };
            if (response === null) {
                res.status(404).json({
                    message: 'Product out off stock !'
                });
            } else {
                res.status(200).json(response);
            }
        });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Create product success !',
                product: product
            });
        }).catch(err => console.log(err));
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id, function(err, doc) {
        if (err) {
            console.log(err);
        }

        doc.name = req.body.name;
        doc.price = req.body.price;
        doc.save()
            .then(update => {
                res.status(200).json({
                    message: 'Product updated !',
                });
            }).catch(err => console.log(err));
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product is deleted !'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


module.exports = router;