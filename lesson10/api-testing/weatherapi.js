// import { main } from './windchill.js';

import { weatherKey } from './apikey.js';
var weather = new weatherKey();
console.log(weather);
const ApiURL = weather.key;


function wind_chill(temp, wind) {
    return (35.74 + 0.6125 * temp - (35.75 * wind ** 0.16) + 0.4275 * temp * wind ** 0.16).toFixed(0);
}

fetch(ApiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        // console.log(jsonObject.list[0].main.temp);
        var count = 0;

        for (let i = 0; i < jsonObject.list.length; i++) {
            if (i === 0) {
                var cur_condition = jsonObject.list[i].weather.description;
                var high_temp = jsonObject.list[i].main.temp_max;
                var cur_humidity = jsonObject.list[i].main.humidity;
                var wind_speed = jsonObject.list[i].wind.speed;

                // set all of the values now
                document.getElementById('cur_condition').textContent = cur_condition;
                document.getElementById('high_temp').textContent = high_temp;
                document.getElementById('wind_chill').textContent = wind_chill(high_temp, wind_speed);
                document.getElementById('cur_humidity').textContent = cur_humidity;
                document.getElementById('wind_speed').textContent = wind_speed;
            }

            var str = jsonObject.list[i].dt_txt;
            if (str.slice(-8) === '18:00:00') {
                count++;
                // console.log(jsonObject.list[i]);
                const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';  // note the concatenation
                const desc = jsonObject.list[i].weather[0].description;  // note how we reference the weather array
                document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
                document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
                document.getElementById('icon').setAttribute('alt', desc);

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