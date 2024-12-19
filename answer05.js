function shoppingCart() {
    let cartItems = [];

    return {
        getCartItems: function () {
            return cartItems;
        },
        addItem: function (product) {
            const existingProduct = cartItems.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cartItems.push({ ...product, quantity: 1 });
            }
        },
        removeItem: function (productId) {
            cartItems = cartItems.filter((item) => item.id !== productId);
        },
    };
}

const cart = shoppingCart();
console.log("Cart Items:", cart.getCartItems()); 

const product1 = { id: 1, name: "Product 1", price: 10 };
const product2 = { id: 2, name: "Product 2", price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log("Cart Items:", cart.getCartItems());

cart.removeItem(2);
console.log("Cart Items:", cart.getCartItems());

// Output
// Cart Items: []
// Cart Items: [
//   { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//   { id: 2, name: 'Product 2', price: 20, quantity: 1 }
// ]
// Cart Items: [ { id: 1, name: 'Product 1', price: 10, quantity: 2 } ]