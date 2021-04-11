const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ulRef = document.querySelector('#ingredients');

ingredients.forEach( li => {
    const liEl = document.createElement('li');
    liEl.textContent = li;
    ulRef.appendChild(liEl);
});