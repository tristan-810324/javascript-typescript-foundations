// function challenges 

// challenges 1 
function analyzeStudent(name, grades) { 
    let total = 0; 

    for (const grade of grades) { 
        total += grade;
    } 

    const average = total / grades.length;
     
    let status; 
    let remarks;

    if (average >= 75) { 
        status = "Passed"; 
    } else { 
        status = "Failed"; 
    }

    if (average >= 90) { 
        remarks = "Excellent"; 
    }
    else if (average >= 80) { 
        remarks = "Very Good";
    } 
    else if (average >= 75) { 
        remarks = "Good";
    } else { 
        remarks = "Needs Improvement";
    }

    return { 
        name: name,
        average: average,
        status: status,
        remarks: remarks
    };
} 

const result= analyzeStudent( 
    "Tristan", 
    [85, 90, 78, 92, 88]
); 

console.log(result);  


// next challenge
 let balance = 100000; 

 function withdraw(amount) { 

    if (amount > balance) { 
        return "Insufficient funds";
    } 

    if (amount <= 0) { 
        return "Invalid amount"; 
    } 
    
    balance -= amount;  

    return `Withdrawal successful. New balance: ${balance}`;
 }   

 const withdrawalResult = withdraw(50000);
 console.log(withdraw(8000)); 
 console.log(withdraw(60000));
 console.log(balance); 


 // next challenge 
 const users = [
    { username: "tristan", password: "1234", role: "admin" },
    { username: "maria", password: "5678", role: "user" },
    { username: "john", password: "abcd", role: "user" }
];

function login(username, password) {

    for (const user of users) {

        if (
            user.username === username &&
            user.password === password
        ) {
            return {
                success: true,
                message: "Login successful",
                username: user.username,
                role: user.role
            };
        }
    }

    return {
        success: false,
        message: "Invalid username or password"
    };
}

const results = login("tristan", "1234");

console.log(result);  




