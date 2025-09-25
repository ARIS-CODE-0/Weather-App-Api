function getCoordonates(cities,city) {
  const normalize = s => 
    String(s || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .toLowerCase()
      .trim();

    const target = normalize(city)
    let lon = null
    let lat = null

    for(const [cityName, data] of Object.entries(cities)) {
      if(normalize(cityName) === target) {
        lon = data.longitude
        lat = data.latitude
        return {lon, lat}
      }
    }


  
  return {
    lon,
    lat
  }
}

module.exports = { getCoordonates }