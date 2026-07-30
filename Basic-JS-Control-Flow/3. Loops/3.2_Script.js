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


for (let pallet = 500;  pallet >= 50; pallet -= 50) { 
        console.log( "Pallet:"  + pallet); 
} 

// 7 
for ( let attendance = 1; attendance <= 25; attendance ++) { 
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
        console.log("loading customer Account"); 
}