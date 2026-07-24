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

const userName = "tristan"; 

if (userName === "tristan") { 
        console.log("hello {UserName}") ; 

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




