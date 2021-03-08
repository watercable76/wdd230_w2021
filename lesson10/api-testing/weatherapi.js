// import { main } from './windchill.js';

const ApiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=07edcaccc064119c281855eedd314fc9&units=imperial';


function wind_speed(temp, wind) {
    return (35.74 + 0.6125 * temp - (35.75 * wind ** 0.16) + 0.4275 * temp * wind ** 0.16).toFixed(0);
}

fetch(ApiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        // console.log(jsonObject.list[0].main.temp);

        for (let i = 0; i < jsonObject.list.length; i++) {
            var str = jsonObject.list[i].dt_txt;
            if (str.slice(-8) === '18:00:00') {
                // console.log(jsonObject.list[i]);
                // set all of the span values for current weather summary
                var cur_condition = jsonObject.list[i].weather.description;
                var high_temp = jsonObject.list[i].main.temp_max;
                var cur_humidity = jsonObject.list[i].main.humidity;
                var wind_speed = jsonObject.list[i].wind.speed;

                // set all of the values now
                document.getElementById('cur_condition').textContent = cur_condition;
                document.getElementById('high_temp').textContent = high_temp;
                document.getElementById('wind_chill').textContent = (35.74 + 0.6125 * high_temp - (35.75 * wind_speed ** 0.16) + 0.4275 * high_temp * wind_speed ** 0.16).toFixed(2);
                document.getElementById('cur_humidity').textContent = cur_humidity;
                document.getElementById('wind_speed').textContent = wind_speed;
                break;
            }
        }

        // main();

        document.getElementById('current-temp').textContent = jsonObject.list[0].main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[0].weather[0].icon + '.png';  // note the concatenation
        const desc = jsonObject.list[0].weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

    });