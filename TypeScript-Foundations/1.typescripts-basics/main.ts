/* typescript needs to input what type of 
 variable it is, so it can be used in the future. */


let studentName: string = "John Doe"; 
let age: number = 20; 
let aStudent: boolean = true; 


// it can use in typescript
let studentNames : string = "itan"; 
// studentNames = 20; // invalid 
studentNames = "John"; // valid
 

/*  intypescript its fine if you dont what to use
 a variable anytime it automatically understand the 
 type of variable it is */ 

 // type inference 

let pet = "dog"; 
let petAge = 5; 


// challenges 1

let sName : string = "Tristan"; 
let sAge : number = 20; 
let sCourse : string = "BSIT"; 
let sYearlevel : number  = 3; 
let sIsEnrolled : boolean = true; 

// challenges 2 
 
const productsItems =  { 
    pName : "laptop", 
    pPrice : 10000, 
    pStock : 5, 
    pIsAvailable : true
}; 


// coding examples 

interface Product { 
    id: number; 
    name: string; 
    price : number; 
    available : boolean; 
} 

const products: Product[] = [ 
    { 
        id: 1, 
        name: "keyboard", 
        price: 1000, 
        available: true
    },  
    { 
        id: 2, 
        name: "mouse", 
        price: 500, 
        available: true 
    }
]; 

products.forEach((product) => { 
    console.log(product.name); 
})


