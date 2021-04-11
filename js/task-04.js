const counterRef = document.querySelector('#counter');
const decrementButtonRef = counterRef.querySelector('button[data-action="decrement"]')
const incrementButtonRef = counterRef.querySelector('button[data-action="increment"]')
const valueRef = counterRef.querySelector('#value');


let counterValue = 0;
valueRef.textContent = counterValue;


const changeCounterValue = () => valueRef.textContent = counterValue;

const decrementHandler = () => {
    counterValue -= 1;
    changeCounterValue();
};

const incrementHandler = () => {
    counterValue += 1;
    changeCounterValue();
};

decrementButtonRef.addEventListener('click', decrementHandler);
incrementButtonRef.addEventListener('click', incrementHandler);