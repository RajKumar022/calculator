// Function display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function fact() {
   let num = parseInt(display.value);
    if (num < 0) {
        display.value = 'Error';
        return;
    }
   let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    display.value = factorial;
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function per() {
   let num = parseFloat(display.value);
    if (!letaN(num)) {
        display.value = num / 100;
    }
}
function pi() {
    display.value = Math.PI;
}

// Function  calculate the result
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
   let display = document.getElementById('display');
    displletvalue = display.value.slice(0, -1);
}