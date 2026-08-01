const mongoose = require('mongoose');

// Schema legt fets, welche Informationen zu Wunschreiseziel gespeichert werden
const wishlistSchema = new mongoose.Schema({
    country: String,
    city: String,
    bestTravelTime: String,
    notes: String,
    priority: Number,
})

// aus dem Schame wird Mongoose-Modell erstellt.
// über das Model können Wunschziele gespeichert, gelesen, bearbeitet und gelöscht werden.
module.exports = mongoose.model('Wishlist', wishlistSchema);