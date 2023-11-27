function showPalindromes(start, end) {
    const resultDiv = document.getElementById('result');
    const counterLabel = document.getElementById('counter');

    const palindromes = [];
    for (let i = start; i <= end; i++) {
        if (i.toString() === i.toString().split('').reverse().join('')) {
            palindromes.push(i);
        }
    }

    counterLabel.textContent = `Liczb palindromicznych jest: ${palindromes.length}`;

    resultDiv.innerHTML = `<p>${palindromes.join(', ')}</p>`;
}