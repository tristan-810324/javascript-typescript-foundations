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




const employees = [
    { name: "Juan", position: "Developer" },
    { name: "Maria", position: "Designer" },
    { name: "Pedro", position: "Tester" }
];  

employees.forEach(employee => {
    console.log(`${employee.name} - ${employee.position}`);
});  


const smProducts = [ 
    {name: "Laptop" , price: 50000}, 
    {name: "Mouse" , price: 500},
    {name: "Keyboard" , price: 1500}
];

smProducts.forEach(product => {
    console.log(
        `Product: ${product.name} | Price: ₱${product.price}`
    );
});  





const walterProducts = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 10 },
    { name: "Monitor", stock: 0 }
]; 


walterProducts.forEach(product=> { 
    if(product.stock > 0) { 
        console.log(`Product: ${product.name} is in stock.`);
    } else { 
        console.log(`Product: ${product.name} is out of stock.`);
    }
});   




const dyciStudents = [
    { name: "Juan", score: 90 },
    { name: "Maria", score: 70 },
    { name: "Pedro", score: 85 },
    { name: "Ana", score: 60 }
];  


dyciStudents.forEach(students => { 
    if (students.score >= 80) { 
        console.log(`${students.name} passed with a score of ${students.score}.`);
    } else { 
        console.log(`${students.name} failed with a score of ${students.score}.`);
    }
});   


// TRANSFORM  → map() - palitan or baguhin


 