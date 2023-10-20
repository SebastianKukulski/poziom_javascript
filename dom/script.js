// Pobieramy elementy z dokumentu
const generateFieldsButton = document.getElementById("generateFieldsButton");
const hiddenInput = document.querySelector("input[type=hidden]");
const songsContainer = document.getElementById("songsContainer");

// Obsługa kliknięcia przycisku "Generuj pola"
generateFieldsButton.addEventListener("click", function () {
    // Wyświetlamy dataset ukrytego inputa w konsoli
    console.log(hiddenInput.dataset);

    // Tworzymy nowe inputy
    const input1 = document.createElement("input");
    input1.setAttribute("value", hiddenInput.dataset.song1);

    const input2 = document.createElement("input");
    input2.setAttribute("value", hiddenInput.dataset.song2);

    const input3 = document.createElement("input");
    input3.setAttribute("value", hiddenInput.dataset.song3);

    // Dodajemy nowe inputy do diva (songsContainer)
    songsContainer.innerHTML = ""; // Wyczyść zawartość diva przed dodaniem nowych inputów
    songsContainer.appendChild(input1);
    songsContainer.appendChild(input2);
    songsContainer.appendChild(input3);
});