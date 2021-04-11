const inputRangeRef = document.querySelector('input[id="font-size-control"]');
const spanRef = document.querySelector('span[id="text"]');

inputRangeRef.addEventListener('input', inputRangeHandler);

function inputRangeHandler (event) {
    spanRef.style.fontSize = `${event.currentTarget.value}px`;

}