

async function getMeteo(city, apiKey) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?0${apiKey}`)
    const data = await res.json();
    console.log(data);
}

async function getFullMeteo(city, apiKey) {
    const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&lang=fr&exclude=minutely,hourly`)
    const data = await res.json();
    console.log(data);
    //writeFile('meteo', data)
}
const apiKey = 'ef74241aa553b6c2b62b548d6ffafb02'
//const city = 'Lubumbashi'
const city = {
    lon: 27.48,
    lat: -11.66
}
getFullMeteo(city, apiKey)