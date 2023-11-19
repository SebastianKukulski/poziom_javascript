document.addEventListener("DOMContentLoaded", function() {
    // Odszukaj formularz
    var form = document.getElementById("myForm");
  
    // Dodaj 100 elementów input do formularza
    for (var i = 1; i <= 100; i++) {
      // Stwórz nowy element input
      var input = document.createElement("input");
  
      // Ustaw atrybuty dla elementu input
      input.id = "input_" + i; // zmieniono na "input_" zamiast "input"
      input.name = "input_" + i;
      input.placeholder = "Element numer " + i;
      input.style.margin = "10px";
      input.style.boxShadow = "5px 5px lightblue";
  
      // Dodaj element input do formularza
      form.appendChild(input);
  
      // Dodaj przerywniki co 20 elementów, aby uzyskać 5 kolumn
      if (i % 20 === 0) {
        form.appendChild(document.createElement("br"));
      }
    }
  });
  