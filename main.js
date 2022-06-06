// start by creating functions for the following items

// add
function add(a, b){
    return a + b;
}

// subtract
function subtract(a, b){
    return a - b;
}

// multiply
function multiply(a, b){
    return a * b;
}

// divide
function divide(a, b){
    return a / b;
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
    return operator(a, b)
}

// Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayNum = ""; // number that goes on the display
let displayOperator = ""; // operator that goes on the display

let firstNumber = 0;

document.querySelectorAll('.numbers').forEach(item => { // when number is pressed, store it to variable and add to display
    item.addEventListener('click', event => {
        displayNum += event.target.id;
        addToDisplay(displayNum);
    })
})

function addToDisplay(param){ // add parameter to display
    document.getElementById("display").innerHTML = param;
}

// store the first number that is input into the calculator when a user presses an operator, 
// and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

document.querySelectorAll('.operators').forEach(item => { 
    item.addEventListener('click', event => {
        displayOperator = event.target.id;
        firstNumber = Number(displayNum);
    })
})



/*


document.getElementById("equals").addEventListener('click', event => {
    addToDisplay(event.target.id);
    })

function addToDisplay(num){
    document.getElementById("display").innerHTML += num;
}
*/

/*

document.getElementById("clear").addEventListener('click', event => {
    addToDisplay(event.target.id);
    })
 */