// Array Methods (.map(), .filter(), .find(), .forEach())

/* what is Array method?? y isang special na uri ng 
object na ginagamit para mag-imbak/store ng maraming value 
sa loob ng iisang variable.

is a collection/list of related data
*/ 

let pruits1 = "apple,"; 
let pruits2 = "banana,";
let pruits3 = "mango,"; 
let pruits4 = "grape,"; 
let pruits5 = "orange,";

let pruitItems = ["apple,", "banana,", "mango,", "grape,", "orange,"];

// characteristics of array method 

/* 1. Zero-based indexing - ito ay nagsisimula sa 0
sa pagbibilang ng posisyon (index) ng mga items */ 
console.log(pruitItems[0]); // apple 
console.log(pruitItems[4]); // orange


/* 2 data type - pwudeng maglaman ng ibat ibang uri 
ng data types sa iisang aray method */ 

let haloHalo = ["Juan", 25, true, { lungsod: "Manila" }];

/* 3. dynamic length - pwude ka magdagdag or magbawad ng 
items anytime and automatic na magbabago ang length 
ng array method */

// real world examples

const fbUsers = [ 
    { 
        id: 1, 
        name: "Juan", 
        email: "juan@gmail.com", 
        role: "admin"
    }, 
    { 
        id: 2, 
        name: "Pedro", 
        email: "pedro@gmail.com", 
        role: "user"
    }, 
    { 
        id: 3, 
        name: "Maria", 
        email: "maria@gmail.com", 
        role: "user"
    }
];  

// how to create an array 
const tools = ["hammer", "screwdriver" , "pliers"];
const groupAttendees = [true, true, false]; 
const data = ["data", 20, true]; 

// Array Indexing - its starts from 0 not 1
/*
values:       Index: 
juan            0 
maria           1
pedro `         2
*/  

const hahastudents = ["juan", "maria", "pedro"]; 
 

/* 
how to add and remove data in a array?? 
push() - add data in the end of the array
pop() - remove data in the end of the array 
*/  

const manageStudents = ["jose", "carlos",]; 
manageStudents.push("carla");  

// result - jose, carlos, carla 

const deleteStudents = ["jose", "carlos", "carla"]; 
console.log(deleteStudents.pop()); 



// real world examples of array 

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        id: 2,
        name: "Mouse",
        price: 500,
        stock: 20
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1500,
        stock: 10
    }
]; 


