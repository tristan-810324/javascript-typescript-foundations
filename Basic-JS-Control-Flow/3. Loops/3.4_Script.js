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