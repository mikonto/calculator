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
document.querySelectorAll('.numbers').forEach(item => {
    item.addEventListener('click', event => {
        addToDisplay(event.target.id);
        console.log(event.target.id);
    })
})
  
document.querySelectorAll('.operators').forEach(item => {
    item.addEventListener('click', event => {
    addToDisplay(event.target.id);
    console.log(event.target.id);
    })
})

document.getElementById("equals").addEventListener('click', event => {
    addToDisplay(event.target.id);
    console.log(event.target.id);
    })

document.getElementById("clear").addEventListener('click', event => {
    addToDisplay(event.target.id);
    console.log(event.target.id);
    })




function addToDisplay(num){
    document.getElementById("display").innerHTML += num;
}

 





