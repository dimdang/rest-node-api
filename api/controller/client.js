const Client = require('../models/client');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

exports.create_client = (req, res, next) => {
    const client = new Client({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        secret: req.body.secret,
        userId: req.body.userId
    });

    client.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: err
            })
        })
};

exports.get_all_clients = (req, res) => {
    Client.find()
        .select('_id name secret userId')
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