// ELSE IF STATEMENT 

let score = 85;

if (score >= 90) { 
    console.log("Excellent"); 
} else if (score >= 80) { 
    console.log("very good"); 
} else if (score >= 75) { 
    console.log("good");
} else { 
    console("failed"); 
}


// coding challenges 1

let student = "tristan"; 
let score = 88; 

if (score >= 90) { 
    console.log(`${student} : Excellent`); 
} else if (score >= 80) { 
    console.log(`${student} : Very good`); 
} else if (score >= 75) { 
    console.log(`${student} : Good`);
} else { 
    console.log(`${student} : failed`);
}



// challenges 2 
let passenger = "Tristan";
let baggageWeight = 28;

if (baggageWeight > 30) {
    console.log(`Passenger: ${passenger}`);
    console.log("Status: Baggage Not Allowed");
} else if (baggageWeight >= 21) {
    console.log(`Passenger: ${passenger}`);
    console.log("Status: Excess Baggage Fee Required");
} else if (baggageWeight >= 8) {
    console.log(`Passenger: ${passenger}`);
    console.log("Status: Checked Baggage");
} else {
    console.log(`Passenger: ${passenger}`);
    console.log("Status: Carry-on Only");
}

// challenges 3
let patient = "Maria";
let priorityNumber = 2;

if (priorityNumber === 1) {
    console.log(`${patient}: Critical`);
} else if (priorityNumber === 2) {
    console.log(`${patient}: Urgent`);
} else if (priorityNumber === 3) {
    console.log(`${patient}: Normal`);
} else {
    console.log(`${patient}: Low Priority`);
}

// challenges 4

let customer = "john"; 
let age = 67; 


if (customer >= 60) { 
        console.log(`${customer} will recieve senior citizen ticket`);
} else if (customer >= 18) { 
        console.log(`${customer} will recieve regular ticket`); 
} else if (customer >= 13) { 
        console.log(` ${customer} will recieve child ticket`); 
} else { 
        console.log("umuwi kana po"); 
}