function generujLiczby() {
    var wynikiElement = document.getElementById("wyniki");
    wynikiElement.innerHTML = "";

    var count = 0;

    for (var i = 100; i <= 999; i++) {
        var numberString = i.toString();
        var digitSum = 0;

        for (var j = 0; j < numberString.length; j++) {
            digitSum += parseInt(numberString.charAt(j));
        }

        var numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.classList.add('liczba');

        if (digitSum === 10) {
            numberDiv.classList.add('czerwony');
            count++;

        }


        wynikiElement.appendChild(numberDiv);
    }

}
