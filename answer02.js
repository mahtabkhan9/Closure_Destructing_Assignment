let order = { orderId: "123456", productName: "Laptop", quantity: 2 };

// Destructure properties
const { orderId, productName, quantity } = order;

console.log(`Order ID: ${orderId}`); 
console.log(`Product Name: ${productName}`); 
console.log(`Quantity: ${quantity}`); 

// Output
// Order ID: 123456
// Product Name: Laptop
// Quantity: 2