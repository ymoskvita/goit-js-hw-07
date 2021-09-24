const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map(item => {
    const ingredientsItemsRef = document.createElement('li');
    ingredientsItemsRef.textContent = item;

    return ingredientsItemsRef;
});

ingredientsListRef.append(...ingredientsItems);