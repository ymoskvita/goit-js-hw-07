const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
    console.log(event.currentTarget.value)
}