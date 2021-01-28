function current_date() {
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();

    // check the month and set to the string value
    switch (month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }

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

    document.getElementById('cur_date').innerHTML = `${day}, ${date} ${month} ${year}`;
}

// window.onload = function() {
// Add event listener to make menu reponsive when small page
const nav_button = document.querySelector('.menu_drop');
const nav_area = document.querySelector('.navigation');

// if user clicks on menu, set responsive class
nav_button.addEventListener('click', () => { nav_area.classList.toggle('responsive') }, false);

// remove responsive class if window is medium sized
window.onresize = () => {
    if (window.innerWidth > 760)
        nav_area.classList.remove('responsive')
};
// }
