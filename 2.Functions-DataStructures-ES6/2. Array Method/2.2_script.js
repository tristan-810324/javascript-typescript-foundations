/* Array methods  

ITERATION    → forEach()   - isaisahin
TRANSFORM    → map()       - palitan or baguhin
SELECT       → filter()    - piliin
LOOKUP       → find()      - hanapin
AGGREGATE    → reduce()    - pagsamahin

*/



// forEach() - iprint nya lahat tas isaisa nyang binabasa yun

const students = ["Juan", "Pedro", "Maria"]; 

students.forEach(function(student) { 
    console.log(student);
});

// Arrow function
students.forEach(student => { 
    console.log(student);
}); 
 

// another examples 

const names = ["Alice", "Bob", "Charlie"]; 

names.forEach(name => console.log(name));
 

// another examples
 const igUsers = [ 
    { 
        id: 1,
        name: "juan", 
        role: "Admin"
    }, 
    { 
        id: 2, 
        name: "Pedro", 
        role: "user"
    }, 
    { 
        id: 3,
        name: "Maria", 
        role: "user"
    }
 ]; 

 igUsers.forEach(users => { 
    console.log(users.name);
    console.log(users.role);

 }); 


 // other examples 
const products = [
    {
        name: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        name: "Mouse",
        price: 500,
        stock: 20
    },
    {
        name: "Keyboard",
        price: 1500,
        stock: 10
    }
];

products.forEach(product => { 
    console.log(
        `Products: ${product.name} | Price: ${product.price} | stocks: ${product.stock}`
    );
})

// last example 
const buttons = document.querySelectorAll(".delete-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Delete clicked");
    });
});

