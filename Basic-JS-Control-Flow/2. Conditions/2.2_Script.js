// if.. else statement

/* 
Important developer tips 
1 . read the condition first:  "Age is 18 or above"

2.  write it first in normal sentence 
        if the score is 75 up 
             passed 
        else  
            failed

3. use proffessional style
        if (score >= 75) { 
             console.log("passed"); 
    }   else { 
            console.log("failed"); 
    }

*/

// login example 
let password = "haha"; 

if (password === "huhu") { 
        console.log("login successful"); 
}  else { 
        console.log("your password is incorrect"); 
}


let balance = 5000; 
let withdraw = 3000; 


if (withdraw <= balance) { 
        console.log("withdraw approval"); 
} else { 
        console.log("insufficient balance");
}


let student = "Tristan"; 
let score = 90; 

if (score >= 75) { 
        console.log(`${student} passed`); 
} else { 
        console.log(`${student} failed`); 
}

 
//1. 
let customer = "tristan"; 
let totalAmount = 4850; 
let walletBalance = 5000; 


if (walletBalance >= totalAmount) { 
        console.log(`payment success. thank you ${customer}`); 
}  else { 
        console.log(`payment failed. isufficient balance`); 
}


// 2. 

let employee = "carlos"; 
let accountStatus = "inactive"; 

if (accountStatus === "active") { 
        console.log(`Hello ${employee}`); 
        console.log("directing to the dashbaord"); 
} else { 
        console.log("account disabled"); 
        console.log("please contact the hr department"); 
}
 
// 3 
let student = "tristan"; 
let examSubmitted = "true"; 

if (examSubmitted === "true") { 
        console.log("Exam submission recieved."); 
        console.log(`Display results for ${student}`);   
} else { 
        console.log("No exam submission found"); 
        console.log("Please submit your exam first"); 
} 


// 4
let customer = "Tristan";
let accountVerified = true;

