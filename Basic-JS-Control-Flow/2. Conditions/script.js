 // conditions 


 /* comparison operators - it compares  two values 
    examples
     < , >  , >= , <= , === , !== 
     `
 */

/* strictly Equallity - use it,  because real developers 
     always use this ==  */ 

    console.log(10 === 5);   // equals to false
    console.log(10 === 10);  // equals to true 

//   strict not  equal  - opposite operator of Equality 

    console.log(10 !== 5);  // equals to true 
    console.log(10 !== 10) // equals to false   


const firstName = "Tristan"; 
const age = 20;
const isStudent = true; 


console.log(firstName === "Tristan");   // true 
console.log(age > 15);  // true 
console.log(isStudent === false) // false 
console.log(age !== 20); // false  

// IF  STATEMENT

const age = 15; 

if (age >= 19) { 
    console.log("adult"); 
}

// challenges  1 to 5 

/* Create a variable named age. set value 20 
    If the age is 18 or older, print:
*/

const age = 20; 

if (age >= 18) { 
    console.log("You are eligible to vote."); 
}


/* Create a variable named temperature.
    Set the value to: 35 If the temperature is greater than 30, print:
    its a hot today 
*/ 

const temperature = 35; 

if (temperature > 30) { 
    console.log("its very hot today"); 
}


/* Create a variable named username. value tristan
If the username is equal to:  Hello Tristan!
*/  

const username = "Tristan";

if (username === "Tristan") {
    console.log("Hello Tristan!");
}


/* 
Create these variables:
const movieAgeRestriction = 18;
const customerAge = 20;
If the customer is old enough to watch the movie, print:
Ticket Approved

*/ 


const movieAgeRestriction = 18;
const customerAge = 20;

if (customerAge >= movieAgeRestriction) {
    console.log("Ticket Approved");
}

/*
Create these variables:
const productPrice = 2500;
const customerMoney = 5000;
If the customer has enough money to buy the product, print:
Purchase Successful
*/


const productPrice = 2500; 
const customerMoney = 5000; 

if (customerMoney >= productPrice) { 
    console.log("pucharse successful"); 
}



// HARD CHALLENGES
const productPrice = 48999;
const customerMoney = 60000;
const productStock = 5;

if (customerMoney >= productPrice) {
    console.log("Customer has enough money.");
}

if (productStock > 0) {
    console.log("Product is available.");
}


// 2NND HARD CHALLENGES 
 
const movieAgeRestriction = 18; 
const customerAge = 21; 
const availableSeats = 30; 


if (movieAgeRestriction >= customerAge) { 
        console.log("Age Verified"); 
} 

if (availableSeats > 0 ) { 
        console.log("Seat Available");
}


/* 
May ATM machine.
let balance = 15000;
let withdraw = 5000;
Kapag sapat ang balance, ipakita: Withdrawal Approved
*/

let balance = 15000; 
let withdraw = 5000; 

if (balance > withdraw) { 
    console.log("withdrawal approved"); 
}





/* Pwede lang manood ng horror movie kapag 18 pataas.
let age = 21;
Kapag qualified: Access Granted
*/

let age = 21; 
if (age > 18) { 
    console.log("Aceess Granted"); 
}



/* Kapag ang total purchase ay 5000 o higit pa, may libreng shipping.
let total = 6800;
output: Free Shipping
*/

let total = 6800; 

if (total >= 5000) { 
    console.log("this is now a free shipping"); 
}

/* A university only displays the names of students who qualify 
for the Academic Excellence Scholarship.
A student qualifies if their GPA is 1.50 or better.
let studentName = "Tristan";
let gpa = 1.25;
Expected Output
Congratulations Tristan!
You qualified for the Academic Excellence Scholarship.
*/ 


let studentName = "Tristan"; 
let gpa = 1.25; 


if (gpa <= 1.50) { 
    console.log(`congrats ${studentName} you are qualified for academic shcolar`); 
}



/*  
Employees who have worked for the company for 15 years or 
more are included in the Hall of Fame.

let employee = "Carlos";
let yearsOfService = 18;
Expected Output
Carlos has been added to the Hall of Fame.  */


let employee = "Carlos"; 
let yearsOfService = 18; 

if (yearsOfService >= 15) { 
    console.log(`${employee} has been added to the hall of fame`); 
}


/* 
University Dean's List
A university prints the names of students who earned a GPA of exactly 1.00.
let student = "Tristan";
let gpa = 1.00;
Expected Output
Highest Honors Awarded to Tristan.

*/


let student = "Tristan";
let gpa = 1.00;

if (gpa === 1.00) {
    console.log(`Highest Honors Awarded to ${student}.`);
}