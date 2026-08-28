// while loops 


let count = 1; 

while (count <= 5) { 
    console.log(count); 
    count++; 
}

// another examples
let stock = 5; 

while (stock > 0) { 
    console.log("stock available");
    stock--;  
} 

 
// other examples 

let stock = 8; 
let soldItems = 0; 

while (stock > 0) {
   
    if (stock === 3) { 
        break; 
    } 

    console.log("stock available"); 

    stock--; 
    soldItems++; 
}  

console.log(`the total stock is: ${stock}`); 
console.log(`the total sold items is ${soldItems}`); 


// examples 

let stock = 7; 
let soldItems = 0; 


while (stock > 0) { 
    console.log("selling items...");  

    stock--; 
    soldItems++;  
}  

console.log(`Remaining stock: ${stock}`); 
console.log(`Total sold ${soldItems}`); 


// exmaples 

let stock = 10; 
let soldItems = 0; 

while (stock > 0) {

    if (stock === 5) { 
        break; 
    } 

    console.log("selling items"); 

    stock--; 
    soldItems++;
}

console.log(`remaining stock ${stock}`); 
console.log(`total sold ${solditems}`); 



// example 3   

let product = 1; 
let processedProducts = 0; 


while (products <= 8) { 

    if (product === 4) { 
        product++; 
        continue; 
    } 

    console.log(`Processing Product ${product}`); 

    processedProducts++; 
    product++; 
} 

console.log(`processed product: ${processedProducts}`); 


// more examples 

let stock = 12; 
let soldItems = 0; 

while (stock > 0) { 

    if (stock === 8) { 
        stock--; 
        continue;
    }

    if (stock === 4) {
        break; 
    } 

    console.log("item sold");  

    stock--; 
    soldItems++; 
} 

console.log(`remaining stock ${stock}`); 
console.log(`total sold ${soldItems}`); 


// last examples 

let stock = 10; 
let soldItems = 0; 
let skippedItems = 0; 

while (stock > 0) { 

    if (stock === 6) { 
        skippedItems++; 
        stock--; 
        continue; 
    } 

    if (stock == 3) { 
        break; 
    } 
    
    console.log("Processing items..."); 
} 

console.log(`remaining stock: ${stock}`); 
console.log(`sold items: ${solditems}`); 
console.log(`skipped items: ${skippedItems}`); 




// challenges 
 
let count = 0; 

while (count <= 5) { 
    console.log(count); 
    count++; 
}  

// challnges 2

let count = 5; 

while (count >= 1) { 
    console.log(count); 
    count--; 
} 


// challenges  

let stock = 5;
 
while (stock > 0) { 
    console.log("stock available"); 
    stock--;    
} 

console.log(`the final stock is : ${stock}`);  



let stock = 5; 
let soldItems = 0; 

while (stock < 0 ) { 
    console.log("selling items.. ");  

    stock--; 
    soldItems++; 
} 
 
console.log(`final stock is: ${stock}`); 
console.log(`total sold is: ${soldItems}`); 




let stock = 7; 
let soldItems = 0; 
 

while (stock > 0) { 

    if (stock === 3) { 
        break; 
    }

    stock--; 
    soldItems++; 
} 

console.log(`the total stock is: ${stock}`); 
console.log(`the total sold items : ${soldItems}`);  



 // examples
let stock = 10; 

while (stock > 0) { 

    if (stock === 5) { 
        stock--; 
        continue;
    } 

    console.log(`Processing stock ${stock}`); 
    stock--; 
}



// next challenges   

let stock = 12; 
 
while (stock > 0) { 

    if (stock === 8) { 
        stock--;
        continue; 
    } 

    if (stock === 4) { 
        break;
    } 

    console.log(`Processing stock ${stock}`);
    
    stock--; 
} 



// examples 

let stock = 12 ; 
let processed = 0; 
let skipped = 0;  

while (stock > 0) { 
    if (stock === 8) { 
        skipped++; 
        stock--; 
        continue; 
    }  
   if (stock  === 4) {
        break;
    } 
    if (stock <= 3) { 
        console.log("low stock warning");
    } 
    console.log(`Processing item ${stock}`); 
    processed++;
    stock--; 


} 


console.log(`Processed items: ${processed}`);
console.log(`Skipped items: ${skipped}`);
console.log(`Remaining stock: ${stock}`);



//  challenges before i sleep 

let balance = 10000; 
let successful = 0; 
let rejected = 0; 


while (balance > 0) { 

    if (balance === 6000) { 
        rejected++; 
        balance -= 2000; 
        continue;
    } 

    if (balance === 2000) { 
        break; 
    }  

    console.log(`withdawal processed ${balance}`); 

    successful++; 
    balance -= 2000;  
} 

console.log(`Successful withdrawals: ${successful}`);
console.log(`Rejected withdrawals: ${rejected}`);
console.log(`Remaining balance: ${balance}`); 




let stock = 10; 

while (stock > 0) { 
    if (stock === 5){ 
        console.log("ito ay number 6 na")
        break; 
    }
}

let stock = 5;

while (stock > 0) { 

    if (stock === 3) { 
        stock--; 
        continue;
    } 

    console.log(stock); 
    stock--; 
}


let number = 1; 

while (number <= 5) { 
     
    if (number === 3) {
        number++;  // magaadd sha pero 
        continue;  // magsskip yung number 3 sa continue funti 
    } 

    console.log(number); 
    number++;
}



let number = 1; 

while (number <= 10) { 

    if (number !== 5) { 
        console.log(number);
    } 

    number++; 
}  



let number = 1; 

while (number <= 10) { 

    if (number === 5) { 
        number++; 
        continue;
    } 

    console.log(number);
    number++;
}  





let stock = 10; 
let processed  = 0; 

while (stock > 0) { 
    
    if (stock === 5) { 
        stock--;
        continue;
    } 
    
    stock--;
    processed++;

    console.log("Processed item"); 

    if (processed === 7) { 
        break; 
    }
    
} 
console.log("Stock remaining:", stock);
console.log("Total processed:", processed);  



// do while loop 


let balance = 5000;
let choice;

do {
    console.log("=== ATM MENU ===");
    console.log("1. Check Balance");
    console.log("2. Withdraw");
    console.log("3. Exit");

    choice = Number(prompt("Choose an option: "));

    if (choice === 1) {

        console.log(`Balance: ₱${balance}`);

    } else if (choice === 2) {

        if (balance < 500) {
            console.log("Insufficient balance.");
            continue;
        }

        balance -= 500;

        console.log("Withdrawal successful.");
        console.log(`Remaining balance: ₱${balance}`);

    } else if (choice === 3) {

        console.log("Thank you for using the ATM.");

    } else {

        console.log("Invalid option.");

    }
} while (choice !== 3);


// examples
let balance = 10000; 
let transaction = 1; 


do { 
    console.log(`processing transactions ${transaction}`); 

    balance -= 2000; 
    transaction++; 

} while (balance > 0); 

console.log(`Remaining balance ${balance}`); 


// examples

let stock = 5; 
let processsed = 0; 



do {
    console.log(`Processing stock ${stock}`); 

    processed++; 
    stock--; 

} while (stock > 0); 

console.log(`Processed: ${processed}`); 


// another examples 


let stock = 7;
let processed = 0;
let skipped = 0; 



do { 
    
    if (stock === 5) {
        skipped++; 
        stock--;
        continue;
    } 

    console.log(`Processing items: ${stock}`); 

    processed++; 
    stock--; 

} while (stock > 0); 

console.log(`Processed: ${processed}`); 
console.log(`skipped ${skipped}`); 





let stock = 8; 
let processed = 0; 


do { 

    if (stock === 4) { 
        break;
    }

    console.log(`Processing stock ${stock}`); 

    processed++; 
    stock--; 
} while (stock > 0); 

console.log(`Processed: ${Processed}`); 
console.log(`Remaining stock ${stock}`); 




let stock = 9;
let processed = 0;
let skipped = 0;

do {

    if (stock === 6) {
        skipped++;
        stock--;
        continue;
    }

    if (stock === 3) {
        break;
    }

    if (stock <= 5) {
        console.log("Low stock warning");
    }

    console.log(`Processing item ${stock}`);

    processed++;
    stock--;

} while (stock > 0);

console.log(`Processed: ${processed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Remaining stock: ${stock}`);



// more examples

let stock = 10;
let processed = 0;
let skipped = 0;

do {

    if (stock === 7) {
        skipped++;
        stock--;
        continue;
    }


    if (stock === 4) {
        break;
    }


    if (stock <= 5) {
        console.log("Low stock warning");
    }


    console.log(`Processing item ${stock}`);
    processed++;


    stock--;

} while (stock > 0);

console.log(`Processed: ${processed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Remaining stock: ${stock}`);





