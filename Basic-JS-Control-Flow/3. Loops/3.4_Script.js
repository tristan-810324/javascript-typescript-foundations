// nested loops 

// examples
for (let floor = 1; floor = 1; floor++) { 

        for(let room = 1; room <= 4; room++) { 

            console.log("floor" + floor + "Room" + room); 
        }
}



// examples

for (let row = 1; row <= 5; row++) { 

    console.log("=== ROW" + row + "===");

    for (let seat = 1; seat <= 10; seat++) {

        console.log("seat" + seat); 
    }
}


// examples

for (let classroom = 1; classroom <= 4; classroom++) { 
    
    console.log("Classroom" + classroom); 

        for (let student = 1; student <= 3; student++) { 
            console.log("Student" +  student); 
        }
}

// examples


for (let shelf = 1; shelf <= 5; shelf++) { 
    
    console.log("shelf" + shelf); 

        for (let box = 1; box <= 10; box++) { 
                console.log("Box" + box); 
        }
}

// challenges 

for (let aisles = 1; aisles <= 4; aisles++) {
        console.log("_______________");  
        console.log("aisles" + aisles); 

        for (let products = 1; products <= 6; products++) { 
                console.log("Products" + products); 
        }
} 


// challenges 

for (let shelves = 1; shelves <= 3; shelves++) { 
        console.log(`=== + ${shelves} +  ===`); 

        for (let box = 1; box <= 4; box++) { 
                console.log(`Box ${box}`); 
        }
}


// challenges 

for (let rows = 1; rows <= 6; rows++) { 
        console.log("Row" + row); 

        for (let seat = 1; seat <= 6; seat++) { 
                console.log("seat" + seat); 
        } 
}

//  challenges  

for (let classrooms = 1; classrooms <= 3; classrooms++) { 
        console.log("Classrooms" + classrooms); 

        for (let student = 1;  student <= 5; student++) {
            
        console.log("Student" + student); 
                if (student === 3) { 
                    continue; 
                }

        }
}
 


// challenges 
let totalItems = 0; 

for (let warehouse = 1; warehouse <= 3; warehouse++) { 

    console.log("Warehouse" + warehouse); 

    for (let box = 1;  box <= 5; box++) {
        
        if(box === 2) { 
            continue; 
        } 

        totalItems += 10; 
        console.log(`box ${box}`); 
                                
    }
} 

console.log(`the total items are ${totalItems}`);  




// challenges 


let totalProduction = 0; 

for (let machine = 1; machine <= 4; machine++) {
        console.log("Machine" + machine); 
        
    for (let product = 1; product <= 6; products++) { 
            if (product === 4) { 
                continue; 
            }

            totalProduction += 50;  
            console.log("Products" + product); 
    }
}

console.log(totalProduction);




let totalItems = 0; 

for (let truck = 1; truck <= 5; truck++) { 
    console.log("truck" + truck); 

    for (let box = 1; box <= 8; box++) { 
        if(box === 3) {
            continue; 
        } 
        totalItems += 20; 
        console.log(`box ${box}`); 

        if (totalItems >= 500) { 
            break; 
        }
    }
} 

console.log(totalItems); 



let totalProduction = 0; 


for (let machine = 1; machine <= 4; machine++) { 

    console.log(`machine ${machine}`); 

    for (let product = 1; product <= 7; product++) { 
          if (product === 2) { 
            continue; 
          } 

          totalProduction  +=30; 
          console.log(`Product ${product}`); 


           if (totalProduction >= 300) { 
            break; 
        }
    }   

}

console.log(totalProduction); 



/*  
 
3 departments 
5 products
prices of 500
starting budget of stoee 10,000 


product 2 skip use continue 
bugget of 10k minus 500  -= 
bugdet <= 0 BREAK 

const isAvailable = true  available/ out of stock


*/  








let budget = 10000;
let totalSales = 0;
let totalProducts = 0;

const price = 500;

for (let department = 1; department <= 3; department++) {

        let departmentName; 

        if (departmentName === 1) { 
                departmentName = "Electronics"; 
        } 
        else if (departmentName === 2) { 
                departmentName = "Groceries"; 
        } 
        else if (departmentName === 3) { 
                departmentName = "Clothing"; 
        }

        console.log(`Deparment : ${departmentName}`); 

    for (let product = 1; product <= 5; product++) {

        const isAvailable = product !== 2; 

        if (!isAvailable) { 
            console.log(`Product ${product} out of stock`); 
        }

        totalSales += price; 
        bugdet -= price; 
        totalProducts++; 

        const status = isAvailable ? "Available" : "out of stock"; 
        console.log( `product ${product} : ${status} | price ${price}`); 


 if (product === 4 || product === 5) {
            console.log("Premium Product");
        }

        if (product >= 4 && isAvailable) {
            console.log("High Value Sale");
        }

        if (!isAvailable) {
            console.log("Product is not available");
        }

        if (budget <= 0) {
            console.log("Budget exhausted!");
            break;
        }
    }
}

console.log("Total Sales:", totalSales);
console.log("Total Products:", totalProducts);
console.log("Remaining Budget:", budget);




/* 

2 ware house each warehouse has a 4 boxes that has 10 item on each box
kapag  box is equal to 2  continue 
*/ 

let totalItems = 0; 
let processedBoxes = 0; 


for (let warehouse = 1; warehouse <= 2; warehouse++) { 
     
    for (let box = 1; box <= 4; box++) {  

        if (box === 2) { 
            continue; 
        } 
        processedBoxes++; 
        totalItems += 10; 

        if (totalItems >= 50) { 
            break; 
        }
    }
} 

console.log("total items is:" + totalItems); 
console.log("Processed Boxes: processedBoxes"); 


// challenges

let totalUnits = 0; 
let processedProducts = 0; 


for (let machine = 1; machine <= 3; machine++) { 
    console.log(`machine ${machine}`); 

    for (let product = 1; product <= 5; product++) { 
            if (product === 3){ 
                continue; 
            } 

            processedProducts++; 
            totalUnits += 20; 

            if(totalUnits >= 100){ 
                break; 
            }
    }
}



/* 
3 warehouse 
5 trucks 
15 boxes
*/   
 

let totalBoxes = 0; 
let deliveredTrucks = 0; 


for (let warehouse = 1; warehouse <= 3; warehouse++) { 
        console.log(`Warehouse ${warehouse}`); 

        for (let teruck = 1; truck <= 5; truck++) { 
             if (truck === 2) { 
                continue; 
             } 

             deliveredTrucks ++;
             totalBoxes += 15; 

             if (totalBoxes >= 90) { 
                break; 
             }

        }
} 

console.log("total Boxes: " + totalBoxes); 
console.log("Delivered Trucks" + deliveredTrucks); 


/* 
 
2 machines 
5 product

*/ 
let processedProducts = 0;
let passedProducts = 0;
let failedProducts = 0;

for (let machine = 1; machine <= 2; machine++) {

    console.log(`Machine ${machine}`);

    for (let product = 1; product <= 5; product++) {

        let qualityScore = 80;

        if (product === 2) {
            continue;
        }

        processedProducts++;

        if (qualityScore >= 80) {

            console.log(`Product ${product}: PASS`);
            passedProducts++;

        } else {

            console.log(`Product ${product}: FAIL`);
            failedProducts++;
        }

        if (passedProducts >= 3) {
            break;
        }
    }
}

console.log("Processed Products:", processedProducts);
console.log("Passed Products:", passedProducts);
console.log("Failed Products:", failedProducts);  





// last challenge 
let processedProducts = 0;
let totalStocks = 0;

for (let department = 1; department <= 2; department++) {

    console.log(`Department ${department}`);

    for (let product = 1; product <= 5; product++) {

        if (product === 2) {
            continue;
        }

        processedProducts++;
        totalStocks += 10;

        if (totalStocks >= 40) {
            console.log("Stock level is: HIGH");
        } else {
            console.log("Stock level is: LOW");
        }

        if (totalStocks >= 60) {
            break;
        }
    }
}

console.log("Processed Products:", processedProducts);
console.log("Total Stocks:", totalStocks);