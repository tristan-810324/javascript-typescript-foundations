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
let customer = "John";
let age = 67;

if (age >= 60) {
    console.log(`${customer} will receive a Senior Citizen Ticket.`);
} else if (age >= 18) {
    console.log(`${customer} will receive a Regular Ticket.`);
} else if (age >= 13) {
    console.log(`${customer} will receive a Student Ticket.`);
} else {
    console.log(`${customer} will receive a Child Ticket.`);
}


// Challenges 5

let employee = "tristan"; 
let performanceScore = 83; 


if (perfomanceScore >= 95) { 
        console.log(`Employee :  ${{employee}}`); 
        console.log(`Performance Score : ${performanceScore}`); 
        console.log("Bonus Award: $5,000 + Certificate of Excellence");
}   else if (perfomanceScore >= 90) { 
        console.log(`Employee :  ${{employee}}`); 
        console.log(`Performance Score : ${performanceScore}`); 
        console.log("Bonus Award: $3,500 Bonus");
}   else if (performanceScore >= 80) { 
        console.log(`Employee :  ${{employee}}`); 
        console.log(`Performance Score : ${performanceScore}`); 
        console.log("Bonus Award: $2,000 Bonus");   
}   else if (performanceScore >= 70) { 
        console.log(`Employee :  ${{employee}}`); 
        console.log(`Performance Score : ${performanceScore}`); 
        console.log("Bonus Award: $500 Bonus");   
}   else  {
        console.log(`Employee :  ${{employee}}`); 
        console.log(`Performance Score : ${performanceScore}`); 
        console.log("Bonus Award: $No bonus");   
}  



// challenges 6 

let age = 6; 
let gradeAverage = 96; 
let entranceExam = 94; 




if (age < 16) { 
    console.log("Application Rejected"); 
    console.log("Reason : Application is too young"); 
} else if (gradeAverage < 75) { 
    console.log("Application Rejected"); 
    console.log("Reason : Failed High school requirements"); 
} else if (entranceExam < 60) { 
    console.log("Application Rejected"); 
    console.log("Failed entrance exam"); 
} else if (gradeAverage === 100) { 
    console.log("Perfect Academic Award"); 
} else if (gradeAverage >= 98) { 
    console.log("Presidents Scholar"); 
} else if (gradeAverage >= 95) { 
    console.log("Full Scholarship"); 
} else if (gradeAverage >= 90) {
    console.log("Half Scholarship"); 
} else if (gradeAverage >= 85) { 
    console.log("Qualified for admission"); 
} else if (gradeAverage >= 75) { 
    console.log("Addmission Only"); 
}


/* Logical operators 
&&  AND
||  OR 
! NOT 
*/


/* && AND - pag may isang false, ang boung 
    condition ay magiging false 

    -- lahat ng condition ay dapat totoo at laging tama ang 
    dalawang requirements
*/
// examples 
let hasTicket = true; 
let hasValidId =  true; 

if (hasTicket && hasValidId) { 
    console.log("you can enter the event");
}

// examples
let age = 25; 
let monthlyIncome = 50000;

if(age >= 18 && montlyIncome >= 30000) { 
        console.log("loan application accepted");    

}  




/* ||  or kahit isang condition lng ang true
 magiging true ang boung expression ng code
 
    -- kahit isa lng ang tama, okay na 
 
 */ 

let isStudent = false; 
let isSenior = true; 

if (isStudent || isSenior) {
      console.log("discount granted");
}

// examples
let passedEntranceExam = true; 
let hasRecommendation = false; 

if (passedEntranceExam ||  hasRecommendation) { 
    console.log("eligible for evaluation"); 
}

// examples
if (premuimMember || ordertotal >= 100) {
    console.log("free shipping"); 
}







// &&  challenges  
 let ValidStudentId = true; 
 let unpaidBalance = false; 

if (validStudentId === true && unpaidBalance === false) {
        console.log("library Access Granted"); 
}

// 2 

let stocks = 15; 
let customerBalance = 5000; 
let productPrice = 3500; 


if (stock > 0  && customerBalance >= productPrice) { 
        console.log("purchase successful"); 
}

let hasEmployeeIld = true; 
let arrivalTime = 8; 

if (hasEmployeeIld === true && arrivalTime < 9) { 
      console.log("Access Granted"); 
}


// 3 


let age = 45; 
let medicalClearance = true; 
let paymentCompleted = true; 


if (age >= 18 && medicalClearance === true && paymentCompleted === true) { 
        console.log("lets start the operation"); 
}



// 4 

let age = 25; 
let accountVerified = true; 
let accountBalance = 15000; 
let transferAmount = 5000; 
let hasOTP = true; 
let accountStatus = "active"; 


if (
    age >= 18 &&
    accountVerified === true &&
    accountStatus === "active" &&
    hasOTP === true &&
    accountBalance >= transferAmount
) {
    console.log("Transfer Approved");
}



// 5 
 
let age = 35; 
let hasvalidId = true; 
let hasHealthInsurance = true; 
let emergencyFeePaid = true;
let doctorAvailable = true; 
let hospitalCapacity = 18; 



if (
    age >= 18 && 
    hasValidId === true && 
    hasHealthInsurance === true && 
    emergencyFeePaid === true &&  
    doctorAvailable === true &&  
    hospitalCapacity > 0
) { 
    console.log("Emergency Admission Approved"); 
}



// || or operators 

let gradeAverage = 89; 
let entranceExam = 93; 
let wonCompetition = false; 

if (
    gradeAverage >= 95 || 
    entranceExam >= 90 || 
    wonCompetition === true
) { 
        console.log("Qualified for scholarship"); 
}
 




// challenges 2 

let accountBalance = 120000; 
let premuimMember = false; 
let bankEmployee = true; 
let bussinessAccount = false; 


if ( 
    accountBalance >= 500000 || 
    premuimMember === true || 
    bankEmployee === true || 
    bussinessAccount === true 
) { 
    console.log("vip lounge Access granted"); 
}



// challenges 3 


let premuimMember = false; 
let rentedMovie = false; 
let movieVoucher = true; 
let isAdministrator = false;
let purchaseMovie = false; 


if ( 
    premuimMember === true || 
    rentedMovie === true || 
    movieVoucher == true || 
    isAdministrator === true || 
    purchaseMovie === true 
) { 
        console.log("Premium Movie Unlocked")
}