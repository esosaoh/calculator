function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNUmber, secondNumber){
    if (operator === "+"){
        return add(firstNUmber, secondNumber)
    }
    if (operator === "-"){
        return subtract(firstNUmber, secondNumber)
    }
    if (operator === "/"){
        return divide(firstNUmber, secondNumber)
    }
    if (operator === "*"){
        return multiply(firstNUmber, secondNumber)
    }
}