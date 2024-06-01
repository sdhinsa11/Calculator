function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;

}


var a = parseFloat(prompt("Enter a value: ")); // get input from user 
var b = parseFloat(prompt("Enter another value: "));

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));