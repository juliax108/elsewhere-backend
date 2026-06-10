const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: String,
    country: String,
    city: String,
    startDate: Date,
    endDate: Date,
    description: String,
    rating: Number,
    travelWith: String,
})

module.exports = mongoose.model('Trip', tripSchema);