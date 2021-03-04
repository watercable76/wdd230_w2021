const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === 'Preston' || towns[i].name === 'Soda Springs' || towns[i].name === 'Fish Haven') {
                let card = document.createElement('section');
                // create h2 for town name, motto (italicized), year founded, population and rainfall
                let h2 = document.createElement('h2');
                let span = document.createElement('span');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                // create img and store inside a figure element
                // let img = document.createElement('img');
                // let figure = document.createElement('figure');
                // figure.setAttribute('class', 'json_fig_imgs');

                // image = "images/" + towns[i].photo;
                // img.setAttribute('src', image);
                // img.setAttribute('alt', name);
                // figure.appendChild(img);


                let name = towns[i].name;

                h2.textContent = name;
                span.textContent = towns[i].motto;
                p1.textContent = "Year Founded: " + towns[i].yearFounded;
                p2.textContent = "Population: " + towns[i].currentPopulation;
                p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

                span.setAttribute('class', 'motto');

                card.appendChild(h2);
                card.appendChild(span);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                // card.appendChild(img);
                // card.appendChild(figure);

                document.querySelector('div.cards').appendChild(card);
            }

        }
    });
