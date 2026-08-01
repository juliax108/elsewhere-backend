const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Mongoose-Modelle für Reisen und Wunschziele
const Trip = require('./models/trip');
const Wishlist = require('./models/wishlist');

const app = express();
const port = 3000;

// erlaubt Anfragen vom Angular-Frontend
app.use(cors());

// wandelt eingehende JSON-Daten automatisch in JavaScript-Objekte um
app.use(express.json());

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect('mongodb://localhost:27017/elsewhere')
    .then(() => console.log('Datenbank verbunden'))
    .catch((err) => console.log(err))

// ------------------------- Reisen -------------------------

// alle Reisen aus der Datenbank abrufen
app.get('/trips', async (req, res) => {
    const trips = await Trip.find();
    res.json(trips);
});

// neue Reise in der Datenbank speichern
app.post('/trips', async (req, res) => {
    const trip = new Trip(req.body);
    await trip.save();
    res.json(trip);
});

// vorhandene Reise anhand ihrer ID aktualisieren
app.put('/trips/:id', async (req, res) => {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body)
    res.json(trip)
});

// Reise anhand ihrer ID löschen
app.delete('/trips/:id', async (req, res) => {
    await Trip.findByIdAndDelete(req.params.id)
    res.json({ message: 'Trip gelöscht' });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});

// ------------------------- Wunschliste -------------------------

// alle Wunschzielea brufen
app.get('/wishlist', async (req, res) => {
    const wishlist = await Wishlist.find();
    res.json(wishlist);
});

// neues Wunschziel speichern
app.post('/wishlist', async (req, res) => {
    const wishlistItem = new Wishlist(req.body);
    await wishlistItem.save();
    res.json(wishlistItem);
});

// Wunschziel bearbeiten
app.put('/wishlist/:id', async (req, res) => {
    const wishlistItem = await Wishlist.findByIdAndUpdate(req.params.id, req.body)
    res.json(wishlistItem)
});


// WUnschziel löschen
app.delete('/wishlist/:id', async (req, res) => {
    await Wishlist.findByIdAndDelete(req.params.id)
    res.json({ message: 'Ziel gelöscht' });
});





