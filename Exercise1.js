// Declare price and quantity variables
let rosePrice = 8;
let roseQuantity = 70;

let lilyPrice = 10;
let lilyQuantity = 50;

let tulipPrice = 2;
let tulipQuantity = 120;

// Calculate total value for each flower
let roseValue = rosePrice * roseQuantity;     // 8 * 70 = 560
let lilyValue = lilyPrice * lilyQuantity;     // 10 * 50 = 500
let tulipValue = tulipPrice * tulipQuantity;  // 2 * 120 = 240

// Calculate total inventory value
let totalValue = roseValue + lilyValue + tulipValue;

// Display output
console.log(`Rose – unit price: ${rosePrice} , quantity: ${roseQuantity} , value: ${roseValue}`);
console.log(`Lily – unit price: ${lilyPrice} , quantity: ${lilyQuantity} , value: ${lilyValue}`);
console.log(`Tulip – unit price: ${tulipPrice} , quantity: ${tulipQuantity} , value: ${tulipValue}`);
console.log(`Total: ${totalValue}`);
