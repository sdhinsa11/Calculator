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
};

function operate( n1, n2, op){ // when dealing with op dont turn it into a float keep it at the +
    if (op === '+')
        {add(n1, n2);}

    else if (op === '-')
        {subtract(n1,n2);}

    else if (op === '*')
        {multiply(n1, n2);}

    else if (op === '/' && n2!= 0)
        { divide(n1, n2);}
    else
    { alert("Not a proper operator.");}

}

// var a = parseFloat(prompt("Enter a value: ")); // get input from user 
// var b = parseFloat(prompt("Enter another value: "));

var num1;
var num2;
var operator;

const buttons = document.querySelector(".btn dark");
function display(){
    var screen = document.querySelector(".screen");
    screen.innerText = 0;
}







// console.log(add(a, b));
// console.log(subtract(a, b));
// console.log(multiply(a, b));
// console.log(divide(a, b));