document.addEventListener("DOMContentLoaded", function() {
    odswiezStrone();
});

function odswiezStrone() {
    var miesiac = Math.floor(Math.random() * 15) + 1;
    document.getElementById("miesiac").innerHTML = "Miesiąc: " + miesiac;

    var kwartalElement = document.getElementById("kwartal");

    switch (true) {
        case miesiac >= 1 && miesiac <= 3:
            kwartalElement.innerHTML = "I kwartał";
            break;
        case miesiac >= 4 && miesiac <= 6:
            kwartalElement.innerHTML = "II kwartał";
            break;
        case miesiac >= 7 && miesiac <= 9:
            kwartalElement.innerHTML = "III kwartał";
            break;
        case miesiac >= 10 && miesiac <= 12:
            kwartalElement.innerHTML = "IV kwartał";
            break;
        default:
            kwartalElement.innerHTML = "Błędny numer miesiąca";
    }
}
getElementById("kwartal");