function myFunction() {
    const prompt1= prompt("Podaj liczbę rzeczywistą", );
    console.log(prompt1);
    document.getElementById("liczba").innerHTML = "Podana liczba:" + prompt1;
    document.getElementById("abs").innerHTML = "abs(" + prompt1 + ")=" + Math.abs(prompt1);
    document.getElementById("ceil").innerHTML = "ceil(" + prompt1 + ")=" + Math.ceil(prompt1);
    document.getElementById("floor").innerHTML = "floor(" + prompt1 + ")=" + Math.floor(prompt1);
    document.getElementById("max").innerHTML = "max(" + prompt1 + ")=" + Math.max(prompt1);
    document.getElementById("min").innerHTML = "min(" + prompt1 + ")=" + Math.min(prompt1);
    document.getElementById("pow").innerHTML = "pow(" + prompt1 + ")=" + Math.pow(prompt1);
    document.getElementById("round").innerHTML = "round(" + prompt1 + ")=" + Math.round(prompt1);
    document.getElementById("sqrt").innerHTML = "sqrt(" + prompt1 + ")=" + Math.sqrt(prompt1);

}
