const inputRef = document.querySelector('input');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

destroyRef.addEventListener('click', onDestroyBtn);
renderRef.addEventListener('click', onClickBtn);

function onClickBtn(event) {
    const amount = inputRef.value;
    createBoxes(amount);
}

function createBoxes(amount) {
    const arr = Array(Number(amount)).fill('div');

    const boxesMarkup = arr.map(function (value, index) {
        const boxRef = document.createElement('div');
        const width = 30 + 10 * index;
            console.log(width);
        boxRef.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        boxRef.style.width = `${width}px`;
        boxRef.style.height = `${width}px`;

        return boxRef;

    })
                console.log(...boxesMarkup);

boxesRef.append(...boxesMarkup);
}


function onDestroyBtn(event) {
    boxesRef.innerHTML = '';
}
