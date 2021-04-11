const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputHandler );

function inputHandler(e) {
    spanRef.textContent = e.currentTarget.value;
    if (e.currentTarget.value === "") {
        spanRef.textContent = "незнакомец"
    }
}