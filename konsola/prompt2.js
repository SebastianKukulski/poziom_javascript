function myFunction() {
    const prompt1 = prompt("Podaj pierwszą liczbę");
    console.log(prompt1);
    const prompt2 = prompt("Podaj drugą liczbę");
    console.log(prompt2);

    var td1 = document.getElementById("td1");
    td1.innerHTML = "Dziesięć losowych liczb z przedziału " + prompt1 + " do " + prompt2;

    function genRanNumb() {
        var vMin = parseInt(prompt1);
        var vMax = parseInt(prompt2);
        var generated = [];

        for (var i = 0; i < 10; i++) {
            var randomNum = Math.floor(Math.random() * (vMax - vMin + 1)) + vMin;
            generated.push(randomNum);
        }

        console.log(generated);

        var losoweRow = document.getElementById("losowe").getElementsByTagName("td");
        for (var i = 0; i < 10; i++) {
            losoweRow[i].textContent = generated[i];
        }
    }

    // Wywołanie funkcji generującej liczby
    genRanNumb();
}
