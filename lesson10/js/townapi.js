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
                card.setAttribute('class', 'cards_section');
                // create h2 for town name, motto (italicized), year founded, population and rainfall
                let h2 = document.createElement('h2');
                let span = document.createElement('span');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                let name = towns[i].name;

                // create img and store inside a figure element
                let img = document.createElement('img');
                let figure = document.createElement('figure');
                figure.setAttribute('class', 'json_fig_imgs');

                image = "images/" + towns[i].photo;
                img.setAttribute('src', image);
                img.setAttribute('alt', "image of " + name);
                img.setAttribute('class', 'fig_imgs');
                figure.appendChild(img);



                h2.textContent = name;
                span.textContent = towns[i].motto;
                p1.textContent = "Year Founded: " + towns[i].yearFounded;
                p2.textContent = "Population: " + towns[i].currentPopulation;
                p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

                span.setAttribute('class', 'motto');

                // set a div to hold all but the figure
                let div2 = document.createElement('div');
                div2.setAttribute('class', 'card_div_text');

                div2.appendChild(h2);
                div2.appendChild(span);
                div2.appendChild(p1);
                div2.appendChild(p2);
                div2.appendChild(p3);

                // card.appendChild(img);
                card.appendChild(div2);
                card.appendChild(figure);

                document.querySelector('div.cards').appendChild(card);
            }

        }
    });