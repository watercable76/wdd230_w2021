// import { main } from './windchill.js';

// import { weatherKey } from './apikey.js';
// var weather = new weatherKey();
// console.log(weather);
// const ApiURL = weather.key;

// const city_name = document.getElementsByClassName('city_name');
// console.log(city_name[0]);

// does not work. Maybe because page is not rendered yet
// let elements = document.getElementById('cur_condition').textContent;
// console.log(elements);

// city_id's for all of the towns
/********************************************
 * Fish Haven   - 5585010
 * Soda Springs - 5607916
 * Preston      - 5604473
 ********************************************/

// import * as x from './apikey.js';

// console.log(x);

// set days of the week automatically

function current_date(day) {

    // check and set day as the string value
    switch (day) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    }

    return day;
}


const x = document.getElementsByTagName('title')[0].textContent;
console.log(x);

var city_id = 0;

switch (x) {
    case 'Fish Haven':
        city_id = 5585010;
        break;
    case 'Soda Springs':
        city_id = 5607916;
        break;
    case 'Preston':
        city_id = 5604473;
        break;

    default:
        break;
}


const ApiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&appid=07edcaccc064119c281855eedd314fc9&units=imperial`;


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

        // runs when the api call is made
        var d = new Date();
        var day = d.getDay();
        var count = day;

        for (let i = 0; i < 5; i++) {
            console.log(current_date(count));
            let day = current_date(count);
            console.log(day);

            let p = document.createElement('p');
            p.textContent = day;

            let th = document.createElement('th');
            th.appendChild(p);

            console.log(th);

            if (count == 6) { count = 0; }
            else { count++; }

            document.querySelector('tr.table_row_one').appendChild(th);

            // var stuff = document.querySelector('tr.table_row_one');
            // console.log(stuff);
        }



        for (let i = 0; i < jsonObject.list.length; i++) {
            if (i === 0) {
                console.log(jsonObject.list[i].weather[0].description);
                var cur_condition = jsonObject.list[i].weather[0].description;
                cur_condition = cur_condition.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

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
                // console.log(jsonObject.list[i]);
                let th = document.createElement('th');

                // create image and add to th
                let img = document.createElement('img');
                const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';  // note the concatenation
                const desc = jsonObject.list[i].weather[0].description;  // note how we reference the weather array
                img.setAttribute('src', imagesrc);
                img.setAttribute('alt', desc);
                img.setAttribute('class', 'five_day_icon');

                // create the span to hold the temp
                let p = document.createElement('p');
                p.textContent = (jsonObject.list[i].main.temp).toFixed(0) + '\u00B0F';

                th.appendChild(img);
                th.appendChild(p);

                document.querySelector('tr.row_two_table').appendChild(th);
            }
        }

        // main();

        // document.getElementById('current-temp').textContent = jsonObject.list[0].main.temp;

        // const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[0].weather[0].icon + '.png';  // note the concatenation
        // const desc = jsonObject.list[0].weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);

    });