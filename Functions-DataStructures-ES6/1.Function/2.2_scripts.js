const product = { 
    name: "Keyboard",
    stock : 5 

}; 

function canPurchase(product, quantity) { 
    return quantity <= product.stock; 
}  

console.log(canPurchase(product, 3)); 
console.log(canPurchase(product, 20)); 


// more examples 
function isAdult(age) { 
    return age >= 18;
}
 
console.log(isAdult(20));  // true sagot 
console.log(isAdult(15));  // false sagot


// another examples
function canBuy (money, price) { 
    return money >= price; 
} 

console.log(canBuy(100, 50)); // true
console.log(canBuy(30, 50));  // false


// another example
function calculateTotal(price, quantity) { 
    return price * quantity;
} 

console.log(calculateTotal(100, 3));  
console.log(calculateTotal(30, 4));
  


// another examples 
const item = { 
    name : "Mouse",
    stock : 10
}; 

function canPurchase(item, quantity) { 
    return quantity <= item.stock;
} 

console.log(canPurchase(item, 5)); 
console.log(canPurchase(item, 15)); 



