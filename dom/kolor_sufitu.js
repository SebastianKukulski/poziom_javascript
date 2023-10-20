var button = document.getElementById('k_sufitu');

button.addEventListener('click', function() {
    var kolor = prompt('Podaj kolor sufitu:');
    if (kolor !== null) {
        alert("Twoje niebo ma kolor: " + kolor);
    } else {
        alert("Anulowałeś akcję, a okienko zwróciło " + kolor);
    }
});
