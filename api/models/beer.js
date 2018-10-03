var mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    type: { type: String },
    quantity: { type: Number },
    userId: { type: String }
});

module.exports = mongoose.model('Beer', BeerSchema);