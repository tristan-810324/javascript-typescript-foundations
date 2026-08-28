// ================================
// DISPLAY
// ================================

let display = document.getElementById("display");


// ================================
// VARIABLES
// ================================

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";


// ================================
// NUMBER BUTTONS
// ================================

let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");


// ================================
// OPERATOR BUTTONS
// ================================

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");


// ================================
// OTHER BUTTONS
// ================================

let equals = document.getElementById("equals");
let clear = document.getElementById("clear");


// ================================
// NUMBER 0
// ================================

zero.addEventListener("click", function () {

    display.textContent += "0";

});


// ================================
// NUMBER 1
// ================================

one.addEventListener("click", function () {

    display.textContent += "1";

});


// ================================
// NUMBER 2
// ================================

two.addEventListener("click", function () {

    display.textContent += "2";

});


// ================================
// NUMBER 3
// ================================

three.addEventListener("click", function () {

    display.textContent += "3";

});


// ================================
// NUMBER 4
// ================================

four.addEventListener("click", function () {

    display.textContent += "4";

});


// ================================
// NUMBER 5
// ================================

five.addEventListener("click", function () {

    display.textContent += "5";

});


// ================================
// NUMBER 6
// ================================

six.addEventListener("click", function () {

    display.textContent += "6";

});


// ================================
// NUMBER 7
// ================================

seven.addEventListener("click", function () {

    display.textContent += "7";

});


// ================================
// NUMBER 8
// ================================

eight.addEventListener("click", function () {

    display.textContent += "8";

});


// ================================
// NUMBER 9
// ================================

nine.addEventListener("click", function () {

    display.textContent += "9";

});


// ================================
// ADDITION
// ================================

add.addEventListener("click", function () {

    firstNumber = Number(display.textContent);

    operator = "+";

    display.textContent = "";

});


// ================================
// SUBTRACTION
// ================================

subtract.addEventListener("click", function () {

    firstNumber = Number(display.textContent);

    operator = "-";

    display.textContent = "";

});


// ================================
// MULTIPLICATION
// ================================

multiply.addEventListener("click", function () {

    firstNumber = Number(display.textContent);

    operator = "*";

    display.textContent = "";

});


// ================================
// DIVISION
// ================================

divide.addEventListener("click", function () {

    firstNumber = Number(display.textContent);

    operator = "/";

    display.textContent = "";

});


// ================================
// EQUALS
// ================================

equals.addEventListener("click", function () {

    secondNumber = Number(display.textContent);


    // ADDITION
    if (operator === "+") {

        result = firstNumber + secondNumber;

    }


    // SUBTRACTION
    else if (operator === "-") {

        result = firstNumber - secondNumber;

    }


    // MULTIPLICATION
    else if (operator === "*") {

        result = firstNumber * secondNumber;

    }


    // DIVISION
    else if (operator === "/") {

        result = firstNumber / secondNumber;

    }


    // DISPLAY RESULT
    display.textContent = result;

});


// ================================
// CLEAR
// ================================

clear.addEventListener("click", function () {

    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";

    display.textContent = "0";

});