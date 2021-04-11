const inputRef = document.querySelector('input[type="number"]');
const buttonRenderRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.querySelector('div[id="boxes"]');


inputRef.addEventListener('input', inputHandler);
buttonRenderRef.addEventListener('click', buttonRenderHandler);
buttonDestroyRef.addEventListener('click', buttonDestroyHandler);

let inputAmount;

function inputHandler(event) {
    inputAmount = event.currentTarget.value;
} 


function buttonRenderHandler() {
    createBoxes(inputAmount);
}

let boxWidth = 0;
let boxHeight = 0;

const createBoxes = function(amount) {

    for (let i = 0; i < amount; i += 1 ) {

        const box = document.createElement('div');
        box.classList.add('boxStyle');
        box.style.width = `${30 + boxWidth}px`;
        box.style.height = `${30 + boxHeight}px`;
        boxWidth += 10;
        boxHeight += 10;
        box.style.backgroundColor = `rgb(${Math.round(Math.random() * 256)}, 
        ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;
        divBoxesRef.appendChild(box);

    }
}


function buttonDestroyHandler(event) {
    destroyBoxes();
};

const destroyBoxes = function() {
    divBoxesRef.innerHTML = '';
    boxWidth = 0;
    boxHeight = 0;
}