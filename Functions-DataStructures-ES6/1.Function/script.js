/* what if function?? 

in programming function is reusable block of code 
isang naka package na hanay ng mga utios na ginawa
para gumana ang isang practicular na job. 



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
