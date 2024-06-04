https://wpshout.com/snippets/add-event-listener-to-multiple-elements-with-javascript/#gref

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

let buttons = document.querySelectorAll("button");

for (let i of buttons){
    i.addEventListener('click', function(){
        var screen = document.querySelector(".screen");
        if (i.innerText === "AC"){ 
            screen.innerText = 0; }
        else if (['+', '-', '*', '/', '=', '%'].includes(i.innerText)){
            screen.innerText = this.innerText;
        }
        
        // only neg if number
        else if(i.innerText === "+/-"){
            if(!isNaN(parseInt(screen.innerText))){
                screen.innerText = -(screen.innerText);
            }
        }

        else if (!isNaN(parseInt(i.innerText))){ // tests if it is a number
            screen.innerText = this.innerText;}
    });
}








// buttons.addEventListener("click", display);


// function display(){
//     var screen = document.querySelector(".screen");
    
//     if (buttons.innerText === "AC"){ screen.innerText += 0; }
    
//     if (parseInt(buttons.innerText)=== 'number'){
//         screen.innerText += buttons.innerHTML;
//     }
//     if (buttons.innerText in ['+', '-', '*', '/', '=', '%']){
//     screen.innerText += buttons.innerText;  }
// }



// console.log(add(a, b));
// console.log(subtract(a, b));
// console.log(multiply(a, b));
// console.log(divide(a, b));