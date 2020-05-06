const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express ();

app.use(cors());

app.get('/location', (req, res) => {
    console.log('you hit the location route');
    res.json({ hello: 'location' });
});

app.get('/weather', (req, res) => {
    console.log('you hit the weather route');
    res.json({ hello: 'weather' });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));