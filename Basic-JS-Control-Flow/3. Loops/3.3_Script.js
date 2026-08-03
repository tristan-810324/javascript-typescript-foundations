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

