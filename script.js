const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const equals = document.querySelector('#equal');
const display = document.querySelector('#display');

let firstNum = '';
let operator = '';
let secNum = '';
let decimalAllowed = true;

numberBtn.forEach(button => {
    button.addEventListener("click", function () {
        let buttonValue = button.value;
        if (buttonValue === '.') {
            if (decimalAllowed) {
                if (operator === '' || firstNum === '') {
                    firstNum += buttonValue;
                    display.textContent = firstNum;
                } else {
                    secNum += buttonValue;
                    display.textContent = secNum;
                }
            } decimalAllowed = false;
        } else {
            if (operator === '' || firstNum === '') {
                firstNum += buttonValue;
                display.textContent = firstNum;
            } else {
                secNum += buttonValue;
                display.textContent = secNum;
            }
        }

    })

})

operatorBtn.forEach(button => {
    button.addEventListener("click", function () {
        let buttonValue = button.value;
        switch (buttonValue) {
            case 'add':
                operator = add;
                break;
            case 'subtract':
                operator = subtract;
                break;
            case 'divide':
                operator = divide;
                break;
            case 'multiply':
                operator = multiply;
                break;
        }
    })
})


equals.addEventListener("click", function () {
    let result = '';
    result = operate(operator, firstNum, secNum);
    firstNum = result;
    secNum = '';

});

clear.addEventListener("click", () => {
    operator = '';
    firstNum = '';
    secNum = '';
    display.textContent = 0;
})

// decimal.addEventListener("click", () => {
//     if (decimalAllowed === true) {
//         display.textContent += '.';
//         decimalAllowed = false;
//     }

// })

const operate = (operator, firstNum, secNum) => {
    let result = operator(firstNum, secNum);
    display.textContent = result;
    return result;
}


const add = (x, y) => {
    let result = +x + +y;
    return result;
}
const subtract = (x, y) => {
    let result = +x - +y;
    return result;
}
const divide = (x, y) => {
    let result = +x / +y;
    return result;
}
const multiply = (x, y) => {
    let result = +x * +y;
    return result;
}

