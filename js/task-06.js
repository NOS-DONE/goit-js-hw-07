const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', inputBlurHandler);


function inputBlurHandler(event) {

    if (parseInt(event.currentTarget.value.length) === parseInt(inputRef.dataset.length)) {

        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        return;
    } 
        inputRef.classList.add('invalid');
    
   
   }