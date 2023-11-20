document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myform");

    for (var i = 1; i <= 100; i++) {
        var input = document.createElement("input");
      input.id = "input_" + i;
      input.name = "input_" + i;
      input.placeholder = "Element numer " + i;
      input.style.margin = "10px";
      input.style.boxShadow = "5px 10px lightblue";
  
      form.appendChild(input);
  
      if (i % 20 === 0) {
        form.appendChild(document.createElement("br"));
      }
    }
  });
  