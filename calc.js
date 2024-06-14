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
        {return add(n1, n2);}

    else if (op === '-')
        {return subtract(n1,n2);}

    else if (op === '*')
        {return multiply(n1, n2);}

    else if (op === '/' && n2!= 0)
        {return divide(n1, n2);}
    else
    { alert("Not a proper operator.");}

}

// var a = parseFloat(prompt("Enter a value: ")); // get input from user 
// var b = parseFloat(prompt("Enter another value: "));


// handle multiple numbers use a list - tmrw 
// var num1 = 0;
// var num2 = 0;
// var operator = NaN;

operatorlist = [];
numlist = [];

// var prev = false;
// var clearDisplay = false;
// var reset = false;

var append = false;
var dec = false;

// var nums = []; // need to have 3 max

//1. if its a number then add to array
//2. if second number is not a operator then dont append it 
//3. must be a number 
//4. hit equal run the numbers and the return the thing 

//or 

// 1. if num1 is empty then u can put the number there 
// to do this catch the value on the screen before the user enters = or any operator 
//2. if operator empty u can put the operator in there 
//3. if num 2 empty u can put the operator in there 
//4. equal sign- call operator on the variables and then after you display the number then empty out the variables 
//5. when AC called empty out the variables 


let buttons = document.querySelectorAll("button");

for (let i of buttons){
    i.addEventListener('click', function(){
        var screen = document.querySelector(".screen");
        
        // clear the screen 
        if (i.innerText === "AC"){ 
            screen.innerText = 0;
            numlist = [] // num1 = 0;
            operatorlist = [] // num2 = 0; 
            // operator = NaN;
         }

        // handle operations
        else if (['+', '-', '*', '/', '%'].includes(i.innerText)){
            // screen.innerText = this.innerText;
            numlist.push(parseFloat(screen.innerText));
            operatorlist.push(this.innerText);// operator = i.innerText;
            append = false;
            dec= false;
        }
        

        // handle numbers 
        else if(i.innerText === "+/-"){ // only neg if number
            if(!isNaN(parseFloat(screen.innerText))){
                screen.innerText = -(screen.innerText);
            }
        }

        else if(i.innerText=== "."){
            if (!dec){
                screen.innerText += "."
                dec = true;
            }
        }

        else if (!isNaN(parseFloat(i.innerText))){ // tests if it is a number
            if (numlist.length === operatorlist.length  && !append){ 
                screen.innerText = this.innerText;
                append = true;
            } 
            else if (append){   
                screen.innerText +=this.innerText;
            }
        }

        else if (i.innerText === "=" && ((numlist.length + operatorlist.length)%2 === 0)){
            numlist.push(parseFloat(screen.innerText));

            //for loop
            var ans = numlist[0];
            for(let i = 0; i<operatorlist.length;i++){
                var ans = operate(ans,numlist[i+1],operatorlist[i])
            }
            screen.innerText = ans;
            numlist = [];
            operatorlist = [];
            append = false;
            dec = false;
        }

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