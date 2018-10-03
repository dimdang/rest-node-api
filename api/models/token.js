const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    value: { type: String, required: true },
    userId: { type: String, required: true },
    clientId: { type: String, required: true }
});

module.exports = mongoose.model('Token', TokenSchema);