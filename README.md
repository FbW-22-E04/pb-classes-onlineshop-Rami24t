# :shopping_cart: Mini Online-Shop

**This exercise covers the JavaScript concepts of classes and instance objects**

Your task is to create a Product and Cart class representing an online shop.

---

## 1. Product

Write a `Product` class that should have 2 properties

- a `name` as a string
- a `price` as a number

The constructor should take 2 parameters initializing those properties. For examples

```js
const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)
```

The class should also have 2 methods

- `toText()` - returning a string with the products name, gross price and the contained VAT.
- `containedVAT()` - returning 16% of the products price as VAT (value-added tax)

```js
tracksuit.toText() // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
tracksuit.containedVAT() // 24.00 € VAT incl.
```

## 2. Cart

Write another class `Cart`, which should have one property

- `products`, an array of products

On creation of an instance of Cart, there will be no products, so the array is empty. Your constructor will not take in any parameters.

Create two methods for the Cart class:

- `addProduct(shoppedProduct)` that takes one parameter
  - The method should first test, if `shoppedProduct` is an instance of the `Product` class [mdn instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
  - if `shoppedProduct` is an instance of Product add it to the array of products and returns a string with the amount of products in the cart.
  - if `shoppedProduct` is not an instance of Product, return a string state that the product is not available in the shop
- `getProductInfoCart()` that takes no parameters
  - the method should iterate over the array of products
  - for every product contained in the list, call the `toText()` method and print them to the console.
- `getTotalItemsPrice()` that takes no parameters
  - the method should iterate over the array of products calculating the total price of the items currently in the cart, returning it as a string

## 3. Test your cart with products

Hint: you might need to use `console.log()` to see what was returned.

First create an instance of Cart and add your products to your shopping cart. For example:

```js
const cart = new Cart()
cart.addProduct("potato") // This is not available in our shop!
cart.addProduct(tracksuit) // Your shopping cart now contains 1 products
cart.addProduct(shoes) // Your shopping cart now contains 2 products
cart.addProduct(socks) // Your shopping cart now contains 3 products
```

Then call your carts `getProductInfoCart()` and `getTotalItemsPrice()` methods. For example:

```js
cart.getProductInfoCart()
// Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// Puma tracksuit 100.00 € in total. 16.00 € VAT incl. (16%).

cart.getTotalItemsPrice()
// The total for 2 items in your cart amounts to 249.99 €.
```
