const categoriesRef = document.querySelector('#categories');
const allItemRef = categoriesRef.querySelectorAll('.item');
console.log(`В списке ${allItemRef.length} категории.`);


allItemRef.forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`)
});