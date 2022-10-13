let testcase =['20','*','20','+','200','/','30'];
function calculateResult(){

    let s= testcase[0];
    let value = parseInt(s);
    let sum = value;
    for (let i=2; i<testcase.length; i=i+2) {

        s=testcase[i];
        value = parseInt(s);
        let operator = testcase[i-1];
        
        if (operator == '+') {
            sum += value;
        }
        else if (operator == '-') {
            sum -= value
        }
        else if (operator == '*') { 
            sum *= value;
        }
        else if (operator === '/') {
            sum /= value;
        }
        else {
            console.log("Not applicable");
        }
    }
    
    return sum;

}

console.log(calculateResult());