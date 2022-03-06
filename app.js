///faefd4c5516d97115d30cc6fbcc8e78b
////api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}




async function openWeatherMap() {
    const input = document.getElementById('inpt').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=faefd4c5516d97115d30cc6fbcc8e78b`
    fetch(url)
        .then(response => response.json())
        .then(data => openWeather(data))


    function openWeather(city) {
        const contailer = document.getElementById('contailer');
        contailer.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Country Name: ${city.sys.country}</h3>
        <h3>City Name: ${city.name}</h3>
        <h3>DT: ${city.dt}</h3>
        <h3>ID: ${city.id}</h3>
        <h4>Lon: ${city.coord.lon}</h4>
        <h4>Lat: ${city.coord.lat}</h4>
        <h4>Temp: ${city.main.temp}</h4>
        <h4>Feels like: ${city.main.feels_like}</h4> 
        <h4>Pressure: ${city.main.pressure}</h4>
        <h4>Timezone: ${city.timezone}</h4>
        <h4>Visibility: ${city.visibility}</h4>
        <h4>Sunrise: ${city.sys.sunrise}</h4>
        <h4>Weather: ${city.weather[0].id}</h4>
        <h4>Icon: ${city.weather[0].icon}</h4>
        `;
        contailer.appendChild(div);
    }
}

document.getElementById('inpt').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        document.getElementById('inpt').click();
    }
})