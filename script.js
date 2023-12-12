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

// numberBtn.forEach(button => {
//     button.addEventListener("click", function () {
//         let buttonValue = button.value;
//         if (buttonValue === '.') {
//             if (decimalAllowed) {
//                 if (operator === '' || firstNum === '') {
//                     firstNum += buttonValue;
//                     display.textContent = firstNum;
//                 } else {
//                     secNum += buttonValue;
//                     display.textContent = secNum;
//                 }
//                 decimalAllowed = false;
//             }
//         } else {
//             if (operator === '' || firstNum === '') {
//                 firstNum += buttonValue;
//                 display.textContent = firstNum;
//             } else {
//                 operatorBtn.forEach(button => {
//                     button.classList.remove('operators')
//                 })
//                 secNum += buttonValue;
//                 display.textContent = secNum;
//             }
//         }

//     })

// })

numberBtn.forEach(button => {
    button.addEventListener("click", function () {
        let buttonValue = button.value;
        if (typeof firstNum === 'number') {
            firstNum = buttonValue;
            secNum = '';
            operator = '';
            holder = '';
            display.textContent = buttonValue;
        } else {
            if (buttonValue === '.') {
            } else {
                if (operator === '' || firstNum === '') {
                    firstNum += buttonValue;
                    display.textContent = firstNum;
                } else {
                    operatorBtn.forEach(button => {
                        button.classList.remove('operators')
                    })
                    secNum += buttonValue;
                    display.textContent = secNum;
                }
            }
        }
    });
});


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
        decimalAllowed = true;
        button.classList.toggle('operators')
    })
})

let holder;

equals.addEventListener("click", function () {
    if (firstNum !== '' && secNum !== '') {
        let result = operate(operator, firstNum, secNum);
        firstNum = result;
        console.log(firstNum)
        holder = secNum;
        secNum = '';
    } else if (typeof (firstNum) === 'number' && secNum === '') {
        let result = operate(operator, firstNum, holder);
        firstNum = result;
        secNum = '';
    } else {
        display.textContent = "Error";
    }
});

clear.addEventListener("click", () => {
    operator = '';
    firstNum = '';
    secNum = '';
    decimalAllowed = true;
    display.textContent = 0;
    operatorBtn.forEach(button => {
        button.classList.remove('operators')
    })
})

const operate = (operator, firstNum, secNum) => {
    let result = operator(firstNum, secNum);
    if (!isFinite(result)) {
        result = "Error"
    } else {
        display.textContent = +(result).toFixed(9);
    }
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

