function current_date() {
    var year = new Date().getFullYear();
    var output = '&#169; ' + year;

    var f_ln = document.getElementById('copyright');
    f_ln.innerHTML = output + f_ln.innerHTML;

    var today = new Date().toLocaleDateString()
    document.getElementById('cur_date').innerHTML = today;
}