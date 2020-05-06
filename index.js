const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { mungeLocation } = require('./utils.js');
const locationData = require('./data/geo.json');
const weatherData = require('./data/weather.json');
const request = require('superagent');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());


app.get('/location', async (req, res) => {
    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${req.query.search}&format=json`);
    const mungedData = mungeLocation(data.body);

    res.json(mungedData);
});

app.get('/weather', asyn (req, res) => {
    const weatherData = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=db`)
    res.json([
        {
            'forecast': 'Partly cloudy until afternoon.',
            'time': 'Mon Jan 01 2001'
        },
        {
            'forecast': 'Mostly cloudy in the morning.',
            'time': 'Tue Jan 02 2001'
        },
    ]);
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));