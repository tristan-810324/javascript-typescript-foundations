// Infinite loops 


// this is a normal loops
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// this is a normal loops
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// this is a normal loops
for (let i = 5; i !== 10; i++) {
    console.log(i);
}


// this is an infinite loops 
for (let i = 1; i <= 20; i--) {
    console.log(i);
}

for (let i = 20; i >= 1; i++) {
    console.log(i);
}

for (let i = -20; i < 20; i -= 4) {
    console.log(i);
}



// break statement in loops

for (let i = 1; i <= 10; i++) { 
    console.log(i); 
    if (i <= 5) { 
        break;
    }
}

    

for ( let account = 1001; account <= 1010; account++) {     

    if ( account === 1005) { 
            console.log("Account 1005 is closed");
            break;
    }

    console.log("Account number: " + account);
}

// challenge: banned customer\

for (let custumer = 1; custumer <= 100; custumer++) { 
        console.log("Customer #: " + custumer); 

        if (custumer === 37) { 
            console.log("This customer is banned"); 
            break; 
        }
}

// challenge: ATM machine
for (let atm = 1; atm <= 50; atm++) {

    console.log("Processing Customer #" + atm);

    if (atm === 18) {
        console.log("Machine Error!");
        break;
    }
}

console.log("ATM Closed");



let lastInspectedBox = 0; 

for (let box = 1; box <= 100; box++) { 

    if (box === 125) { 
        console.log("damaged box)"); 
        lastInspectedBox = box;
        break;
    } 
    console.log("Box #" + box + " inspected"); 
}

console.log("\nInspection Finished");
console.log("Last inspected box: " + lastInspectedBox);


// challenges again  300 passengers 

let passID = 0; 

for (let passengerId = 1; passengerId <= 300; passengerId++) { 

        console.log("Passenger # " + passengerId); 

        if (passengerId === 147) { 
            console.log("Suspicious passenger found!"); 
            passID = passengerId; 
            break;     
        }  
} 

console.log("Airport Security Alert!"); 
console.log("Passenger ID: " + passID);



let total = 0; 

for (let i= 1; i <= 10; i++) { 
    total += i;
} 
console.log("Total: " + total);




let totalSales = 0; 

for (let day = 1; day <= 3; day++) { 
    totalSales += 100; 
}

console.log("totalSales : " + totalSales); 



let totalSales = 0; 

for (let day = 1; day <= 3; day++) { 
    
    totalSales += 500;

} 
 
console.log("totalSales: " + totalSales);


/*

START:

totalSales = 0


---------------------------
FIRST LOOP

day = 1

Condition:

1 <= 3

TRUE ✅

Execute:

totalSales += 500

Meaning:

totalSales = totalSales + 500

0 + 500 = 500


totalSales = 500


After loop:

day++

day = 2



---------------------------
SECOND LOOP

day = 2

Condition:

2 <= 3

TRUE ✅

Execute:

totalSales += 500


500 + 500 = 1000


totalSales = 1000


After loop:

day++

day = 3



---------------------------
THIRD LOOP

day = 3

Condition:

3 <= 3

TRUE ✅

Execute:

totalSales += 500


1000 + 500 = 1500


totalSales = 1500

After loop:
day++
day = 4

---------------------------
FOURTH CHECK

day = 4

Condition:
4 <= 3
FALSE ❌
STOP LOOP

FINAL:
totalSales = 1500

OUTPUT:
totalSales: 1500

*/

let totalSales = 1000; // + 500 + 500 + 500 + 500 + 500  = 3500 

for (let day = 1; day <= 5; day++) { 
        totalSales += 500; 

    console.log("days :" + day); 
    console.log("sales : " + totalSales); 
} 

console.log ("totalSales: " + totalSales);




let bagPack = 100; 

for (let employee = 1; employee <= 5; employee++) { 
    bagpack += 100;

    console.log("Employee " + employee + ": " + bagPack); 
}




let total = 0;

for(let number = 1; number <=4; number++){

    total += number;

}




// continue 


for (let box = 1; box <= 8; box++) {

    if (box === 4) {
        continue;
    }

    console.log("Box " + box);

}

 //

 let total = 0;

for (let number = 1; number <= 5; number++) {

    if (number === 3) {
        continue;
    }

    total += number;

}

console.log(total);

// challenge: continue statement 

    let total = 0; 

for (let number = 1; number <= 10; number++) { 
     
    if (number === 5) { 
        continue; 
    } 
    total += number; 
} 

console.log("Total: " + total); 

 //  next 
  
let total = 0; 

for (let item = 1; item <= 8; item++) { 

    if (item === 3  || item === 5) { 
        console.log(`Item ${item} is defective, skipping...`);
        continue;    
    } 
    else { 
        console .log(`Item ${item} is good, adding to total...`);
        total += item;
    }
}
 

// 1 examples 

let total = 0; 

for (let item = 1; item <= 5; item++) { 
    if (item === 2){ 
        continue;
    }

    total += 1000;
} 

console.log(total); 

// 2 
let balance = 5000; 

for(let payment = 1; payment <= 5; payment++) { 
    balance -= 1000;  
} 

console.log(balance); 


// 3 

let total = 0; 

for (let number = 1; number <= 6; number++) { 

    total = total + number; 

    if(total > 10) { 
        break; 
    }
}

console.log(total);



// 4 

let score = 0; 

for(let exam = 1; exam <=5; exam++) { 

    if(exam === 4) { 
        continue; 
    }
     score += 20; 
}   
    if(score >= 80) { 
        console.log("passed"); 
    }
    else { 
        console.log("failed"); 
    }



//  5 
let money = 10000; 
let spent = 0; 

for (let day = 1; day <= 7; day++) { 
    if (day === 5) { 
        continue; 
   } 

   spent += 1800;
  
    if (spent >= money) { 
        break;
    }  
}

console.log(spent); 

// 6  

let stock = 15;  

for (let customer = 1; customer <= 10; customer++) { 

    if (customer === 6) { 
        continue; 
    }

      stock--; 

    if(stock === 10) { 
        break; 
    } 
} 

console.log(stock);                      




// 7  
let total = 0  
 
for (let item = 1; item <= 8; item++) { 

    if (item === 3 || item === 6) { 
        continue; 
    }
     
    total  = total + item;
}
    


// 8 
let wallet = 15000;
let purchase = 0;

for (let item = 1; item <= 10; item++) {

    if (item === 2 || item === 7) {
        continue;
    }

    purchase += 2300;

    if (purchase >= wallet) {
        break;
    }

}

console.log(purchase);






