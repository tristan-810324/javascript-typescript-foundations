/* ternary operators - is a short version of if..else 
-- Simple decision (dalawang choices lang) → Gumamit ng Ternary.
-- Maraming kondisyon (3 o higit pa) → Gumamit ng if...else if...else.

    */ 
// examples 
 
if (age >= 19) { 
    console.log("Adult"); 
} else  { 
    console.log("Adult");
}     


// lets make the code shorter 

let result = age >= 19 ? "adult" : "Minor"; 

console.log(result); 


/* bakit tinatawag na ternary 

condition ?  trueValue : falseValu

*/ 



// another examples 

let score  = 90; 

let  scoreResult = score >= 75 ? "passed" : "failed"; 
console.log("scoreValue"); 



/* another examples 


    let balance = 1500;
    let amount = 1000;

    let message =
        balance >= amount
        ? "Withdrawal Approved"
        : "Insufficient Balance";

console.log(message);


*/ 

 // make it ternary  

 let balance = 1500; 
 let amount = 1000; 

    let bankMessage = 
    balance >= amount 
    ? "withdrawal approved" : "insufficient balance"; 

    console.log(message); 


let password  = "Admin123"; 


let passwordMessage = 
    password === "Admin123" 
    ? "Login Success"
    : "Wrong Password"; 

console.log(passwordMessage); 




let gwa = 1.40;

let scholarship =
    gwa <= 1.50
    ? "Qualified"
    : "Not Qualifed";

console.log(scholarship);



let age = 15; 

let ticket = 
    age >=  18 
    ? "regular movie"
    : "kids movie";

console.log(ticket); 


let years = 7; 

let employeeBonus = 
    years >= 5 
    ? "5000 bonus" 
    : "no bonus";

console.log(employeeBonus); 


let temperature = 39; 

let temparatureStatus  = 
    temperature >= 38 
    ? "your son has a fever" 
    : "your son is normal"; 

    console.log(temparatureStatus); 

let total = 120; 

let totalShipping = 
    total >= 100 
    ? "Free Shipping" 
    :  "10 pesos shipping fee" ;

    console.log(totalShipping); 

    

// before we proceed to loops 

let yearsOfService = 7;
let performanceScore = 92;
let isLate = false;

let employeeBonus =
    yearsOfService >= 5 &&
    performanceScore >= 90 &&
    !isLate
        ? "Eligible for $1000 Bonus"
        : "Not Eligible for Bonus";

console.log(employeeBonus);


let balance = 10000; 
let totalbalance  = 0;

for (let item = 1; item <= 6; item++) { 

    if (item === 2) { 
        continue; 
    }
    
    totalPurchase += 1800; 

    if (totalPurchase > balance) { 
         break; 
    }
}  

console.log(totalPurchase); 