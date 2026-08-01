const mongoose = require('mongoose');

// Schema legt fest, wie eine Reise in MongoDB gespeichert wird
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

// aus dem Schema wird Mongoose-Model erstellt
// über dieses Model können Reisen gespeichert, gelesen, bearbeitet und gelöscht werden.
module.exports = mongoose.model('Trip', tripSchema);