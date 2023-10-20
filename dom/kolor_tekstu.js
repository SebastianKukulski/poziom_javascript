
    function changeTextColor(cell) {
    const header = document.querySelector('h1');
    header.style.color = cell.textContent.toLowerCase();
}

    function resetTextColor(cell) {
    const header = document.querySelector('h1');
    header.style.color = 'black';
}
