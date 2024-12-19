function shoppingCart() {
    let cartItems = []; // Private variable to store cart items

    return {
        getCartItems: function () {
            return cartItems;
        },
    };
}

const cart = shoppingCart();
console.log("Cart Items:", cart.getCartItems()); 

// Output
// Cart Items: []