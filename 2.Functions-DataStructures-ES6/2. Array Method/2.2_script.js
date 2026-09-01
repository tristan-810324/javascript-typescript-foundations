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


const hahaProducts = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 10 },
    { name: "Monitor", stock: 2 }
];  

hahaProducts.forEach(product => {
    if (product.stock === 0) { 
        console.log(`the product ${product.name} is out of stock.`);
    } 
    else if (product.stock <= 5) { 
        console.log(`the product ${product.name} is low in stock`); 
    } 
    else { 
        console.log(`the product ${product.name} is in stock.`);
    }
}); 


// other examples 
const orders = [
    {
        id: 101,
        customer: "Juan",
        total: 1500,
        status: "Paid"
    },
    {
        id: 102,
        customer: "Maria",
        total: 2500,
        status: "Pending"
    },
    {
        id: 103,
        customer: "Pedro",
        total: 800,
        status: "Paid"
    }
];

orders.forEach(order => {
    console.log(`Order #${order.id}`);
    console.log(`Customer: ${order.customer}`);
    console.log(`Total: ₱${order.total}`);
    console.log(`Status: ${order.status}`);
    console.log("----------------");
});


const employees1 = [
    {
        name: "Juan",
        position: "Developer",
        hoursWorked: 8,
        hourlyRate: 500
    },
    {
        name: "Maria",
        position: "Designer",
        hoursWorked: 10,
        hourlyRate: 400
    },
    {
        name: "Pedro",
        position: "Tester",
        hoursWorked: 6,
        hourlyRate: 350
    }
];

employees1.forEach(employee => {
    const salary = employee.hoursWorked * employee.hourlyRate;

    let workStatus;

    if (employee.hoursWorked > 8) {
        workStatus = "Has Overtime";
    } else {
        workStatus = "Regular Shift";
    }

    console.log(`Employee: ${employee.name}`);
    console.log(`Position: ${employee.position}`);
    console.log(`Salary: ₱${salary}`);
    console.log(`Status: ${workStatus}`);
    console.log("---------------------");
});


const studentshaha = [
    { name: "Juan", score: 95 },
    { name: "Maria", score: 82 },
    { name: "Pedro", score: 76 },
    { name: "Ana", score: 65 }
];

studentshaha.forEach(student => {
    let grade;

    if (student.score >= 90) {
        grade = "A";
    } else if (student.score >= 80) {
        grade = "B";
    } else if (student.score >= 75) {
        grade = "C";
    } else {
        grade = "Failed";
    }

    console.log(
        `${student.name} | Score: ${student.score} | Grade: ${grade}`
    );
});  



const users = [
    { name: "Juan", age: 20 },
    { name: "Maria", age: 16 },
    { name: "Pedro", age: 25 }
];

function checkUserAge(user) {
    if (user.age >= 18) {
        console.log(`${user.name} is an adult.`);
    } else {
        console.log(`${user.name} is a minor.`);
    }
}

users.forEach(checkUserAge);