var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
const incrementButton = document.getElementById('incrementButton')
const decrementButton = document.getElementById('decrementButton')

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


