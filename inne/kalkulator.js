document.addEventListener("DOMContentLoaded", function() {

    let dzialanieEkran = document.getElementById("dzialanie");
    let wynikEkran = document.getElementById("wynik");
    let aktualneDzialanie = "";
    let aktualnyWynik = "";


    function dodajZnak(znak) {
        aktualneDzialanie += znak;
        dzialanieEkran.textContent = aktualneDzialanie;
    }

   
    function obliczWynik() {
        try {
            aktualnyWynik = eval(aktualneDzialanie);
            wynikEkran.textContent = aktualnyWynik;
        } catch (error) {
            wynikEkran.textContent = "Błąd";
        }
    }

    document.querySelectorAll(".liczba, .znaki").forEach(function(button) {
        button.addEventListener("click", function() {
            dodajZnak(button.textContent);
        });
    });

    document.getElementById("=").addEventListener("click", function() {
        obliczWynik();
    });

  
    document.getElementById("reset").addEventListener("click", function() {
        aktualneDzialanie = "";
        aktualnyWynik = "";
        dzialanieEkran.textContent = "/";
        wynikEkran.textContent = "/";
    });
});
