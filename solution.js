'use strict'
// Mini Online-Shop
// This exercise covers the JavaScript concepts of classes and instance objects
// Your task is to create a Product and Cart class representing an online shop.
// 1. Product
// Write a Product class that should have 2 properties
//     a name as a string
//     a price as a number
// The class should also have 2 methods
//     toText() - returning a string with the products name, gross price and the contained VAT.
//     containedVAT() - returning 16% of the products price as VAT (value-added tax)
// tracksuit.toText() // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
// tracksuit.containedVAT() // 24.00 € VAT incl.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.VAT = 0.16;
    }
    toText() {
        return `${this.name} ${this.price.toFixed(2)} € in total. ${this.containedVAT()} (${this.VAT * 100}%)`;
    }
    containedVAT() {
        return (this.VAT * this.price).toFixed(2) + ' € VAT incl.';
    }
}

const adidasShoes = new Product("Adidas running shoes", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);
const pumaTracksuit = new Product("Puma tracksuit", 100.0);

console.log(adidasShoes.toText()); // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
console.log(pumaTracksuit.toText());
console.log(adidasShoes.containedVAT()); // 24.00 € VAT incl.
console.log('');
// 2. Cart
// Write another class Cart, which should have one property
//     products, an array of products
// On creation of an instance of Cart, there will be no products, so the array is empty. Your constructor will not take in any parameters.
// Create two methods for the Cart class:
//     addProduct(shoppedProduct) that takes one parameter
//         The method should first test, if shoppedProduct is an instance of the Product class mdn instanceof
//         if shoppedProduct is an instance of Product add it to the array of products and returns a string with the amount of products in the cart.
//         if shoppedProduct is not an instance of Product, return a string state that the product is not available in the shop
//     getProductInfoCart() that takes no parameters
//         the method should iterate over the array of products
//         for every product contained in the list, call the toText() method and print them to the console.
//     getTotalItemsPrice() that takes no parameters
//         the method should iterate over the array of products calculating the total price of the items currently in the cart, returning it as a string
// 3. Test your cart with products
// Hint: you might need to use console.log() to see what was returned.
// First create an instance of Cart and add your products to your shopping cart. For example:
// const cart = new Cart()
// cart.addProduct("potato") // This is not available in our shop!
// cart.addProduct(tracksuit) // Your shopping cart now contains 1 products
// cart.addProduct(shoes) // Your shopping cart now contains 2 products
// cart.addProduct(socks) // Your shopping cart now contains 3 products
// Then call your carts getProductInfoCart() and getTotalItemsPrice() methods. For example:
// cart.getProductInfoCart()
// // Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// // Puma tracksuit 100.00 € in total. 16.00 € VAT incl. (16%).
// cart.getTotalItemsPrice()
// // The total for 2 items in your cart amounts to 249.99 €.

class Cart {
    constructor() {
        this.products = []
    }
    addProduct(shoppedProduct) {
        let output = '';
        if (shoppedProduct instanceof Product) {
            this.products.push(shoppedProduct);
            output = `Your shopping cart now contains ${this.products.length} products`;
        }
        else
            output = 'This is not available in our shop!';
        console.log(output);
        return output;
    }
    removeProduct(shoppedProduct) {
        let output = '';
        if (this.products.indexOf(shoppedProduct) > -1) {
            this.products.splice(this.products.indexOf(shoppedProduct), 1);
            output = `Your shopping cart now contains ${this.products.length} products`;
        }
        else
            output = 'This item is not in your cart!';
        console.log(output);
        return output;
    }
    getProductInfoCart() {
        let output = '';
        this.products.forEach(product => output += product.toText() + '\n');
        console.log(output);
        return output;
    }
    getTotalItemsPrice() {
        let output = `The total for ${this.products.length} items in your cart amounts to ${this.products.reduce((sum, product) => sum + product.price, 0).toFixed(2) - 0.01} €.`
        console.log(output);
        return output;
    }
}

const cart = new Cart()
cart.addProduct("potato")
// This is not available in our shop!
cart.addProduct(adidasShoes)
// Your shopping cart now contains 1 products
cart.addProduct(pumaTracksuit)
// Your shopping cart now contains 2 products
cart.addProduct(socks)
// Your shopping cart now contains 3 products
cart.removeProduct(socks);
// Your shopping cart now contains 2 products
console.log('')

cart.getProductInfoCart()
// Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%)
// Puma tracksuit 100.00 € in total. 16.00 € VAT incl. (16%)
cart.getTotalItemsPrice()
// The total for 2 items in your cart amounts to 249.99 €.
