const express = require('express');
const cors = require('cors');
const NodeCache = require('node-cache');
require('dotenv').config();


const app = express();
const weatherCache = new NodeCache({ stdTTL: 600})
const { readFile, writeFile } = require('./src/utils/fileFonction');
const { getCoordonates } = require('./src/utils/cityFonctions')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const cities = readFile('cities')
    const city = req.query.city
    const { lon, lat } = getCoordonates(cities,city)
    const cached = weatherCache.get(city)

    if(cached) {
        return res.json(cached)
    }

    try {
        const data = readFile('data');
        const responses = await fetch(`${process.env.API_URL}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&lang=fr&exclude=minutely,hourly`)
        weatherCache.set(city,data)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "API"})
    }
    
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});