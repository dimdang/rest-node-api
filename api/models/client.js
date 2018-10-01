// Load required packages
const mongoose = require('mongoose');

// Define our client schema
const ClientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, unique: true, required: true },
    secret: { type: String, required: true },
    userId: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);