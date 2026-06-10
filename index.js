const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Trip = require('./models/trip');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/elsewhere')
    .then(() => console.log('Datenbank verbunden'))
    .catch((err) => console.log(err))

app.get('/trips', async (req, res) => {
    const trips = await Trip.find();
    res.json(trips);
});

app.post('/trips', async (req, res) => {
    const trip = new Trip(req.body);
    await trip.save();
    res.json(trip);
})

app.delete('/trips/:id', async (req, res) => {
    await Trip.findByIdAndDelete(req.params.id)
    res.json({ message: 'Trip gelöscht' });
})

app.put('/trips/:id', async (req, res) => {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body)
    res.json(trip)
})

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});



