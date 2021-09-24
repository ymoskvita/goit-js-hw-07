const counterValueRef = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
}


