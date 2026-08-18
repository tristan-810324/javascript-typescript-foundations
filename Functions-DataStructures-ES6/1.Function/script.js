/* what if function?? 

in programming function is reusable block of code 

- a section of reusable code 

isang naka package na hanay ng mga utios na ginawa
para gumana ang isang practicular na job. 

difference of console.log vs return 

console.log() - para ipakita ang value 
return - ibinabalik ang value para nagamit sa ibang code.   

*/ 
// this is standard function
function gawaJuice(prutas) { 
    return prutas + "juice"; 
} 
console.log(gawaJuice("Mangga")); 
 
// this is arrow functions - mas shorter kadalasang ginagamit sa angular
const gawaJuice = (prutas) => `${prutas} juice`; 

console.log(gawaJuice("Saging")); 
  
// other examples
function addNumbers(a, b) { 
    return a + b;
} 

const addNumbersArrow = (a, b) => a + b; 
console.log(addNumbers(5, 3)); 
console.log(addNumbersArrow(10, 20)); 




//  other examples 

// Helper 1: Isang tiyak na trabaho lang (Suriin kung adult)
const isAdult = (age) => age >= 18; 


// Helper 2: Format lang ng greeting
const formatGreeting = (name, age) => { 
    const status = isAdult(age) ? "adult" : "Minor"; 
    return `hello ${name}, you are an ${status}`; 
};


// Main Function: Malinis at may Early Return
const processUser = (user) => { 
    if(!user) return "No user Found"; 
    return formatGreeting(user.name, user.age); 
}; 

const user1 = { name: "Juan", age: 20 };
console.log(processUser(user1)); // Output: Hello Juan, you are an Adult!

console.log(processUser(null));  // Output: No user found!





const calculatorDiscount = (price, discountPercent = 10) => { 
    const discoutAmount = price * (discountPercent / 100); 
    return price - discountAmount; 
} 

console.log(calculatorDiscount(1000)); 
console.log(calculatorDiscount(1000, 20)); 



const notifyByEmail = (message) => `Email sent: ${message}`; 

const notifyBySMS = (message) => `SMS sent: ${message}`;  

const processOrder  = (orderId, sendNotification) => { 
    const status = `order #{orderId} has been shipped`; 
    return sendNotification(status); 
} 

console.log(processOrder(101, notifyByEmail));
console.log(processOrder(102, notifyBySms)); 




// simple calculator  

const currentUser = { 
    id: 1,
    username: "alex", 
    role: "user",
    isActive: false
};   

const activeUserAccount = (user, adminRole) => { 

    if (adminRole !== "ADMIN") { 
        return { sucesss: false, message: "Unauthorized action"};
    }

    if (user.isActive) { 
        return {sucess: false, message: "User is already active"}; 
    }

    return { 
        secess: true,
        data: { ...user, isActive: true} 
    }; 
};   

const result1 = activateUserAccount(currentUser , "GUEST"); 
console.log(result1); 

const result2 = activeUserAccount(currentUser, "ADMIN"); 
console.log(result2); 



// more explanations 

function introduce (name, age) { 
    console.log("my name is " + name); 
    console.log("I am" + age + "years old");   
 
} 
introduce("Tristan" ,  21); 


// more examples 

function calculateTotal (price, quantity) { 
    let total = price * quantity; 

    if(total >= 1000) { 
        return total - 100; 
    } 

    return total;
} 

let result = calculateTotal(300 , 4); 
console.log(result);   


// another examples 
function happyBirthday(username, age) { 
    console.log(`happy birthday ${username}`); 
    console.log(`you are now ${age} years old`); 
} 
happyBirthday("Tristan" , 21); 


function printNumbers(limit) { 

    for(let i = 1; i <= limit; i++) { 
        conmsole.log(i); 
    }
}

printNumbers; 


// coding challenges 

function calculateGrade(score) { 
    if (score >= 90) { 
        return "Excellent"; 
    } 
    else if (score >= 80) { 
        return "Very Good"; 
    } 
    else if (score >= 75) { 
        return "Passed"; 
    } 
    else { 
        return "Failed"; 
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(85));
console.log(calculateGrade(76));
console.log(calculateGrade(60));

 
// coding 2
function calculateTotal(price , quantity) { 
    return price * quantity; 
} 

console.log(calculateTotal(100, 5));
console.log(calculateTotal(250, 3)); 

// coding  3 

function calculateDiscount(total) { 
    if (total >= 1000) { 
        return total * 0.10;
    } 
    else if (total >= 500) { 
        return total * 0.05; 
    } 
    else { 
        return 0; 
    }
} 
console.log(calculateDiscount(2000));
console.log(calculateDiscount(800));  
console.log(calculateDiscount(300));  





