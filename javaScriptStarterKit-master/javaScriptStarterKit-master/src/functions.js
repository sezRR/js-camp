function addToCart(quantity, productName = "Apple") {
    console.log("Added to cart: " + productName + ", Quantity: " + quantity);
}

// addToCart()
// addToCart("Apple", 10)
// addToCart("Lemon")
addToCart(10)
// addToCart("Egg")
// addToCart("Watermelon")
// addToCart(15)

let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

function addToCart3(product) {
    console.log("Product: " + product.productName)
    console.log("Quantity: " + product.quantity)
    console.log("Unit Price: " + product.unitPrice)
}

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }

addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }

let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }

product2 = product3

product2.productName = "KARPUZ"

console.log(product3.productName)

let number1 = 10
let number2 = 20

number1 = number2

number2 = 100

console.log(number1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]

addToCart4(products)

function add(something, ...numbers) { // rest operator
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        total += numbers[i]
    }
    console.log("Total: " + total)
    console.log(something)
}

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)

let numbers = [30, 10, 500, 600, 120]
console.log(...numbers) // spread: ayırmak, dağıtmak
// spread ayrıştırır, rest toparlar
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri], karadeniz2] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ],
    { name: "Karadeniz2", population: "10M" },
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(icAnadoluSehirleri)
console.log(karadeniz2)

let aliasOfProductName, newUnitPrice, newQuantity
({ productName: aliasOfProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(aliasOfProductName)
console.log(newUnitPrice)
console.log(newQuantity)