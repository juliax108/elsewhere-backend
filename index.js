const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/elsewhere')
    .then(() => console.log('Datenbank verbunden'))
    .catch((err) => console.log('Datenbankfehler:', err))

app.get('/trips', (req, res) => {
    res.send('alle Trips');
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});



