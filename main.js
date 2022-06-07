// start by creating functions for the following items
function add(a, b){ // add
    return round((a + b), 5)
}

function subtract(a, b){ // subtract
    return round((a - b), 5)
}

function multiply(a, b){ // multiply
    return round((a * b), 5)
}

function divide(a, b) { // divide
    if (b == 0) { // error when divided by zero
        return "...NO"
    }
    else {
        return round((a / b), 5) 
    }
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(callback, a, b) {
    return callback == "add" ? add(a, b)
    : callback == "subtract" ? subtract(a, b)
    : callback == "multiply" ? multiply(a, b) 
    : callback == "divide" ? divide(a, b)
    : "error";
   }

// Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayNum = ""; // value that goes on the display
let num1;
let num2;
let operator;

document.getElementById("reverse").addEventListener('click', event => { // when reverse button is pressed
    if (Number(displayNum) > 0) { // if number on the display is positive..
    displayNum = displayNum.replace (/^/,'-'); //.. add minus
    document.getElementById("display").innerHTML = displayNum;
    }

    else { // if number on the display is negative..
        displayNum = displayNum.replace ('-',''); //.. remove minus
        document.getElementById("display").innerHTML = displayNum;
    }
})

document.querySelectorAll('.numbers').forEach(item => { // when number button is clicked    
    item.addEventListener('click', event => {
        if (event.target.id == "." && displayNum.includes(".")) { // to prevent more than one decimal points
            return
        }
        else {
        displayNum += event.target.id; // add that number into variable displayNum
        document.getElementById("display").innerHTML = displayNum; // show displayNum on display
        }
    })
})

document.querySelectorAll('.operators').forEach(item => { // when operator is clicked
    item.addEventListener('click', event => {
            if(operator == undefined) { // if operator is undefined (= this is first time it is pressed)
                operator = event.target.id; // store clicked operator into variable operator
                num1 = Number(displayNum); // store number on display into num1 variable
                displayNum = ""; // clear display
            }
            else if (operator !== undefined) { // if operator is not undefined (= this is not first time it is pressed)
                num2 = Number(displayNum); // store number on display into num2 variable 
                num1 = operate(operator, num1, num2); // num1 will be calculation based on operator, num1 and num2
                                                                // operator and num1 were stored earlier
                operator = event.target.id; // store new operator based on pressed operator button
                document.getElementById("display").innerHTML = num1; // show num1 (result of calculation) on display
                displayNum = ""; // clear display
            } 

        })
})

document.getElementById("equals").addEventListener('click', event => { // when equals is pressed
    if(operator == undefined && num2 == undefined) { // if operator or num2 has not been set, equals button should not do anything
        return
    }
    else if(operator !== undefined) { // if operator has been set, equals button is functioning
            num2 = Number(displayNum); // store number on display into num2 variable 
            document.getElementById("display").innerHTML = operate(operator, num1, num2); // show result of calculation on display
    }  
    })

    document.getElementById("clear").addEventListener('click', event => { // when clear is pressed
        resetCalculator(); // call function to reset calculator
})

function resetCalculator() { // reset calculator - set variables to undefined and clear displayNum & display
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    displayNum = ""; // clear display
    document.getElementById("display").innerHTML = displayNum; // add number on display
}

// function to round up the results of math functions
const round = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d)


document.getElementById("backspace").addEventListener('click', event => { // when equals is pressed
    displayNum = displayNum.slice(0, -1) //'abcde'        
    document.getElementById("display").innerHTML = displayNum; // show result of calculation on display
    })