let numbers = document.querySelectorAll('.btn');
let operators = document.querySelectorAll('.btnx');
let equalButton = document.querySelector('.btns');

let inputArea = document.querySelector('.input-area');

let digits = '';
let list = [];


numbers.forEach(function (number) {
    number.addEventListener('click', function (e) {
        e.preventDefault();
        digits += number.textContent;
        inputArea.innerHTML += number.textContent;
        console.log(digits);
    });

});

operators.forEach(function (operator) {
    operator.addEventListener('click', function (e) {
        e.preventDefault();
        inputArea.innerHTML += " " + operator.innerHTML +" ";
        list.push(digits,operator.textContent);
        digits ='';
        console.log(list);
    });
    });


equalButton.addEventListener('click', function (e) {
    e.preventDefault();
    list.push(digits);
    console.log(list);
    let result = calculateResult(list);
    inputArea.innerHTML = result;
    console.log(result);

});


function calculateResult(list){

    let s= list[0];
    let value = parseInt(s);
    let sum = value;
    for (let i=2; i<list.length; i=i+2) {
        s=list[i];
        value = parseInt(s);

        let operator = list[i-1];

        if (operator == ' + ') {
            sum += value;
        }
        else if (operator == ' - ') {
            sum -= value
        }
        else if (operator == ' * ') { 
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