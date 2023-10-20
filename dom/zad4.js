
function showHide(id) {
    var element = document.getElementById(id);
    var strzalka = element.previousElementSibling.querySelector('a');

    if (element.style.display == 'block') {
        element.style.display = 'none';
        strzalka.innerHTML = '&#8615;';
    } else {
        element.style.display = 'block';
        strzalka.innerHTML = '&#8613;';
    }
}

