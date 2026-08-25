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
    if (total >= 100) { 
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




// other examples 

function calculateTotal(price, quantity) { 
    return price * quantity; 
} 

let total1 = calculateTotal(500, 3); 
console.log(total); 


// challenges 

function calculateDifference(a, b) { 
    return a - b; 
} 

let results = calculateDifference(20 - 5); 

console.log(results); 



// other basic challenges 
function calculateProduct (price, quantity) { 
    return price * quantity; 
 
} 

let totalProduct = calculateProduct (100, 5); 
console.log(calculateProduct); 


// other examples
 
let price = 250; 
let quantity = 4; 

function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(price, quantity);

let shippingFee = 100;

let finalTotal = total + shippingFee;

console.log(finalTotal);  


function calculateShipping(total) { 
    
    if (total >= 1000) { 
        return 0; 
    } else { 
        return 100;
    }
} 

let shipping = calculateShipping(1500); 
console.log(shipping); 


// user is not empty and password atleast 8 character 

function validateRegistration(username, password) { 
    if (username === "") { 
        return "Username is required"; 
    }

    if (password.length < 8) { 
        return "password must be atleast 8 characters"; 
    }

    return "Registration valid"; 
 } 

 let result4 = validateRegistration("Tristan" , "password123"); 

 console.log(result);  




 function yourGrades(score) { 

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
        return "failed"; 
    }
 } 

let result5 = getGrades(87); 
console.log(result5); 


function processUser(user) { 
    const isValid = validateUser(user); 

    if(!isValid) { 
        return "Invalid user"; 
    } 

    const name = formatUserName(user); 

    return `welcome ${name}`; 
} 

//  1 trying my besst to understand function very well
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

const   Callresult = calculateTotalPrice(100, 5);
console.log(Callresult);


// challenges 2 

function calculateDiscount(price, discountPrice) { 
    const discountAmount = price * (discountPrice / 100);
    return price - discountAmount;  
}

const discountResult = calculateDiscount(1000, 20);
console.log(discountResult); 



// 3rd challenge 
// function pra mavalidate yung username kung empty or not
function validateUsername(username) { 
    if (!username) { 
        return "username is required"; 
    }
    return "username is valid"; 
}  

// function para mavalidate yung password kung atleast 8 characters 
function validatePassword (password) { 
    if (password.length < 8) { 
        return "password must be atleast 8 characters"; 
    }
        return "password is valid"; 
} 

// main function para macall ang dalwang helper na function
function validateUsers (user) { 
    const usernameResult = validateUsername(user.username); 
    const passwordResult = validatePassword(user.password); 

    if(usernameResult === "username is required" &&  passwordResult === "password must be atleast 8 characters") { 
        return "Registation valid"; 
    } 
    
    // Kung may error, pwedeng ibalik kung alin ang nag-fail
    return usernameResult !== "username valid" ? usernameResult : passwordResult;
}

const user = { 
    username: "Tristan", 
    password: "password123"
}; 

console.log(validateUser(user)); 
 





const order = {
    product: "Keyboard",
    price: 1500,
    quantity: 2
};

function calculateSubtotal(order) {
    return order.price * order.quantity;
}

function calculateShipping(subtotal) {
    if (subtotal >= 1000) {
        return 0;
    }

    return 100;
}

function calculateFinalTotal(order) {
    const subtotal = calculateSubtotal(order);
    const shipping = calculateShipping(subtotal);

    return subtotal + shipping;
}

console.log(calculateFinalTotal(order));




// next challenger
const product = {
    name: "Keyboard",
    stock: 10
};

function canPurchase(product, quantity) {
    return quantity <= product.stock;
}

console.log(canPurchase(product, 5));
console.log(canPurchase(product, 15));



