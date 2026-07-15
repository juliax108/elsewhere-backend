const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: String,
    status: {
        type: String,
        enum: ['geplant', 'abgeschlossen'],
        default: 'geplant'
    },
    startDate: Date,
    endDate: Date,
    description: String,
    rating: Number,
    travelWith: String,
    transportMode: String,
    stops: [
        {
            country: String,
            city: String
        }
    ]
})

module.exports = mongoose.model('Trip', tripSchema);