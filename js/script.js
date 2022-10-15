let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
let equalButton = document.querySelector('.equal-sign');
let clearButton = document.querySelector('.clear');
let inputArea = document.querySelector('.input-area');


let digits = '';
let list = [];


numbers.forEach(function (number) {
    number.addEventListener('click', function (e) {
        e.preventDefault();
        digits += number.textContent;
        inputArea.innerHTML += number.textContent;
    });

});


operators.forEach(function (operator) {
    operator.addEventListener('click', function (e) {
        e.preventDefault();
        inputArea.innerHTML += " " + operator.innerHTML + " ";
        if (!digits) {
            list.push(operator.textContent);
        } else {
            list.push(digits, operator.textContent);
        }
        digits = '';

    });
});


equalButton.addEventListener('click', function (e) {
    e.preventDefault();
    list.push(digits);
    let result = calculateResult(list);
    inputArea.innerHTML = result.toString();
    list.length = 0;
    digits = '';
    list.push(result);

});




clearButton.addEventListener('click', function (e) {    
    e.preventDefault();
    list.length = 0;
    digits = '';
    inputArea.innerHTML = '';
});


function calculateResult(list) {

    let s = list[0];
    let value = parseInt(s);
    let sum = value;
    for (let i = 2; i < list.length; i = i + 2) {
        s = list[i];
        value = parseInt(s);

        let operator = list[i - 1];

        if (operator === ' + ') {
            sum += value;
        }
        else if (operator === ' - ') {
            sum -= value
        }
        else if (operator === ' * ') {
            sum *= value;
        }
        else if (operator === ' / ') {
            sum /= value;
        }
        else {
            console.log("Not applicable");
        }
    }

    return sum;

}