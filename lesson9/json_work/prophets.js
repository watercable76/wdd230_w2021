const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            // create h2 for names, p for birthdate/place of birth, set img to source found
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let img = document.createElement('img');
            let name = prophets[i].name + ' ' + prophets[i].lastname;

            h2.textContent = name;
            p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('alt', 'Image of the prophet ' + name);

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        }
    });

function set_styles() {
    var elements = document.querySelector('cards').children;
    var start = 1;
    var end = 3;
    
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 == 0) {
            // set row start and end
            return;
        } else {
            return;
        }
    }
}