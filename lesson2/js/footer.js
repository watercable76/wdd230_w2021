function times() {
    var year = new Date().getFullYear();
    var output = '&#169; ' + year;

    var date = new Date(document.lastModified);
    var last_modified = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    var f_ln = document.getElementById('copyright');
    f_ln.innerHTML = output + f_ln.innerHTML;

    var s_ln = document.getElementById('update_date');
    s_ln.innerHTML = 'Last Updated: ' + last_modified;
}