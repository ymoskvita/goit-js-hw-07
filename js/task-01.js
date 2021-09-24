const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

categories.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)} );
