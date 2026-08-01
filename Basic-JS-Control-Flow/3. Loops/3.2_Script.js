/*  what if loops - ay isang paraan para ulitin ang
ang isang block ng code hangga't  totoo pa ang isang
condition 

-- ito ay paulit ulit hangggang sabihin mong 
stop



HOW  FOR LOOPS WORKS: 

1. Execute the initialization
2. check the condition
3. execute the body
4. excute the Increment  
5 go back to condition and compare it again 
into initialization then it will add another value 
in the initialzation and stop when it is higher than 
first value in step 1


*/

// lets start coding

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* 2. 
// 10 >=  1 = TRUE  ===  i-- 9 
// 9 >= 1 = true   === i-- 8 
// 8 >=1 true   === i-- 7 
//... 
// 1 >= 1 true === i-- 0 
// 0 >= 1 false di nagagana 

*/

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let count = 2; count <= 10; count += 2) {
  console.log(count);
}

// 4

for (let salary = 10000; salary <= 20000; salary += 2000) {
  console.log(salary);
}

// 5

for (let timer = 30; timer <= 0; timer -= 5) {
  console.log(timer);
}

/* 
start 
stop 
move 
*/

for (let i = 1; i <= 5; i++) {
  console.log("Employee #" + i);
}

// next challenges

for (let i = 1; i <= 5; i++) {
  console.log("EMP-" + i);
}

//  next  challenge

for (let attempts = 3; attempts >= 1; attempts--) {
  console.log("Remaining Attempts" + attemps);
}
console.log("card blocked");

// next challenge

for (let set = 1; set <= 5; set++) {
  console.log("seat a" + set);
}

// next 1

for (let box = 100; box >= 50; box -= 10) {
  console.log("number of box" + box);
}

for (let product = 1; product <= 5; product++) {
  console.log("Restocking Product #" + product);
}
console.log("Inventory Updated Sucessfull");

// 10 challenges before i proceed to the next loops

// 1
for (let employee = 1; employee <= 15; employee++) {
  console.log("EMP#" + employee);
}

// 2

for (let rows = 1; rows < 10; rows++) {
  console.log("Seat B" + rows);
}

// 3

for (let balance = 1000; balance >= 0; balance -= 100) {
  console.log("Remaining balance is: " + balance);
}

// 4

for (let patient = 1; patient <= 5; patient++) {
  console.log("calling Patient #" + patient);
}

// 5

for (let products = 100; products <= 500; products += 100) {
  console.log("Product Price: $" + products);
}

//  6

// 500, 50,  TAS YUNG COUNT MATATAPOS SA 50

for (let pallet = 500; pallet >= 50; pallet -= 50) {
  console.log("Pallet:" + pallet);
}

// 7
for (let attendance = 1; attendance <= 25; attendance++) {
  console.log("Present: student #" + attendance);
}

//8

for (let group = 1; group <= 5; group++) {
  console.log("Now Boarding Group " + group);
}
console.log("All Passengers Boarded");

// 9
for (let salaries = 25000; salaries <= 50000; salaries += 5000) {
  console.log("Salary Released: $" + salaries);
}

// 10
for (let customer = 1; customer <= 10; customer++) {
  console.log("Loading Customer Account #" + customer);
}
console.log("System Ready");

// 11

for (let slot = 1; slot <= 12; slot++) {
  if (slot < 10) {
    console.log("Parking Slot P-0" + slot);
  } else {
    console.log("Parking Slot P-" + slot);
  }
}

// 12

for (let floor = 15; floor >= 1; floor--) {
  console.log("Floor " + floor);
}

console.log("Ground Floor");
console.log("Elevator Arrived");

// boss challenge
let age = 25;
let salary = 35000;
let hasJob = true;
let hasBadRecord = false;

for (let applicant = 1; applicant <= 10; applicant++) {
  console.log("Applicant #" + applicant);

  if (age >= 21 && salary >= 30000 && hasJob && !hasBadRecord) {
    console.log("Loan Approved");
  } else if (age < 21) {
    console.log("Rejected");
    console.log("Reason: Under Age");
  } else if (!hasJob) {
    console.log("Rejected");
    console.log("Reason: No Job");
  } else if (salary < 30000) {
    console.log("Rejected");
    console.log("Reason: Salary Too Low");
  } else if (hasBadRecord) {
    console.log("Rejected");
    console.log("Reason: Bad Credit Record");
  } else {
    console.log("Needs Manual Review");
  }
}





let age = 22;
let hasTicket = true;
let ticketScanned = false;
let isVIP = false;
let hasBannedRecord = false;

for (let customer = 10; customer >= 0; customer--) {
                  
    console.log("Customer #" + customer);

    if (isVIP && hasTicket && !hasBannedRecord) {
        console.log("VIP Entrance");
    } 
    else if (age >= 18 && hasTicket && !ticketScanned && !hasBannedRecord) {
        console.log("Entry Approved");
    } 
    else if (age < 18) {
        console.log("Entry Denied");
        console.log("Reason: Under Age");
    } 
    else if (!hasTicket) {
        console.log("Entry Denied");
        console.log("Reason: No Ticket");
    } 
    else if (ticketScanned) {
        console.log("Entry Denied");
        console.log("Reason: Ticket Already Used");
    } 
    else if (hasBannedRecord) {
        console.log("Entry Denied");
        console.log("Reason: Banned Customer");
    } 
    else {
        console.log("Manual Verification Required");
    }

    console.log("----------------------------");
}




//  last 

for (let employee = 1;  employee <= 20; employee++) { 

        console.log("Employee #" + employee); 

        if ( employee >= 1  && employee <= 5) { 
             console.log("manager"); 
        }
        else if (employee >= 6 && employee <= 15) { 
             console.log("regular employee"); 
        } 
        else { 
                console.log("intern"); 
        } 

} 





for (let employee = 1; employee <= 30; employee++) {

    console.log("Employee #" + employee);

    if (employee >= 1 && employee <= 10) {
        console.log("Junior Developer");
    }
    else if (employee >= 11 && employee <= 20) {
        console.log("Mid Developer");
    }
    else {
        console.log("Senior Developer");
        console.log("Eligible for Leadership Bonus");
    }

    console.log("-----------------------");
}



//  1 to 5 challenges 

for (let employee = 1; employee <= 50; employee++) { 
      
        console.log("employee #" + employee); 

        if (employee >= 1 && employee <= 15) { 
              console.log("Hr Department"); 
        }  
        else if (employee >= 16 && employee <= 35) { 
              console.log("IT Department"); 
        } 
        else { 
              console.log("Eligible for yar end bonus"); 
              console.log("Finance  Department"); 
        }

}

// 2. challenge

for (let patients = 1;  patients <= 30; patients++) { 

      if (patients >= 1 && patients <= 8) { 
          console.log("critical");
          console.log("send to emergency room"); 
      } 
      else if (patient >= 9 && patient <= 20) { 
          console.log("normal patient"); 
      }
      else { 
          console.log("Low Priority"); 
      }
}


// 3 challenge 

for (let passengers = 1; passengers <= 40; passengers++) { 

    if (passengers >= 1 && passengers <= 10) { 
          console.log("First class"); 
    }
    else if (passengers >= 11 && passengers <= 20) { 
          console.log("Business Class"); 
    }
    else { 
          console.log("your at economy class"); 
          console.log("proceed to gate  c"); 
    }  

} 


for (let student = 1; student = 25; student++) { 

    if (student >= 1 && student <= 5) { 
          console.log("scholars"); 
    }
    else if (student >= 6 && student <= 18) { 
          console.log("regular"); 
    } 
    else { 
          console.log("waiting list"); 
          console.log("Await available slot"); 
    }

}

// challenges 6

for (let tables = 1; tables <= 30; tables++) { 

    console.log("table #" + tables); 

    if (tables >= 1 && tables <= 10){ 
        console.log("Available"); 
    } 
    else if (tables >= 11 && tables <= 20) { 
        console.log("Reserved"); 
    }
    else { 
        console.log("Ocuppied"); 
        console.log("Wait for next available tables"); 
    } 

    console.log("__________________________________");
}


// challenges 7 

for (let box = 1; box <= 100; box++) { 

    console.log("box #" + box); 

    if (box >= 1 && box <= 30) { 
        console.log("small"); 
    }
    else if (box >= 31 && box <= 70) { 
        console.log("Medium"); 
    }
    else { 
        console.log("large"); 
        console.log("Requires Forklift"); 
    }

    console.log("---------------------"); 
}




for (let account = 1; account <= 50; account++) { 
    
    console.log("Account" + account); 

    if (account >=1 && account <= 10) { 
        console.log("silver"); 
    }
    else if (account >= 11 && account <= 35) { 
        console.log("Gold"); 
    } 
    else { 
        console.log("Platinum"); 
        console.log("Priority Banking Access"); 
    }

      console.log("__________________________"); 

}


for (let students = 1; students <= 100; students++) { 

     console.log("Student" + students); 

     if (students >= 1 && students <= 20) { 
          console.log("cum laude"); 
          console.log("Award gold medal"); 
     } 
     else if (students >= 21 && students <= 40) { 
          console.log("Deans list"); 
           console.log("Award Certificate"); 
     }  
     else if  (students >= 41 && students <= 80) { 
          console.log("Passed"); 
     } 
     else { 
          console.log("need improvements"); 
          console.log("Attend Summer Class"); 
     }
}

// last na tlaga

let isMember = false;
let totalAmount = 3500;
let hasCoupon = true;
let isBlacklisted = false;

for (let customer = 1; customer <= 8; customer++) {

    console.log("Customer #" + customer);

    if (isBlacklisted) {
        console.log("Checkout Denied");
        console.log("Reason: Blacklisted Customer");
    }
    else if (isMember && totalAmount >= 3000) {
        console.log("30% Discount Applied");
    }
    else if (hasCoupon || totalAmount >= 5000) {
        console.log("10% Discount Applied");
    }
    else if (totalAmount < 500) {
        console.log("Minimum Purchase Not Met");
    }
    else {
        console.log("Proceed to Payment");
    }

    console.log("----------------------");
}




