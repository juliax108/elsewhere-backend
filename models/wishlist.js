const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    country: String,
    city: String,
    bestTravelTime: String,
    notes: String,
    priority: Number,
})

module.exports = mongoose.model('Wishlist', wishlistSchema);