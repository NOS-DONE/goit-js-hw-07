const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ulRef = document.querySelector('#ingredients');

const liElements = ingredients.map(li => {
  const liEl = document.createElement('li');
  liEl.textContent = li;
  return liEl;
});

ulRef.append(...liElements)