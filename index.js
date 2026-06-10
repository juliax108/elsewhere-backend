const express = require('express');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/trips', (req, res) => {
    res.send('alle Trips');
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});

