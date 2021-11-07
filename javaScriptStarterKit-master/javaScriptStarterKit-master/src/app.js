console.log("Hello World!")

// dollarYesterday = "Ankara"

let dollarToday = 9.30
let dollarYesterday = 9.20

// JavaScript (JS) is not type safe
dollarYesterday = "Ankara"

{
    let dollarYesterday = 9.10
}

console.log(dollarYesterday)

const euroYesterday = 11.2
// euroYesterday = 11 // error

console.log(euroYesterday)

// array
// camelCase -> değişken tanımlama
// PascalCase
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamut Konut Kredisi", "Özel Konut Kredisi"]

console.log(konutKredileri)

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}

console.log("<ul>")

// var - let
// scope farkı vardır
// var global scopetur.
// let local scopetur.

