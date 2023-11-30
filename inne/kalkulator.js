let currentOperation = '';

function addToOperation(value) {
    currentOperation += value;
    updateDisplay();
}

function resetOperation() {
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('dzialanie').textContent = currentOperation;
}

function calculate() {
    try {
        const result = eval(currentOperation);
        document.getElementById('wynik').textContent = result;
    } catch (error) {
        document.getElementById('wynik').textContent = 'Błąd';
    }
}

document.getElementById('=').addEventListener('click', calculate);
