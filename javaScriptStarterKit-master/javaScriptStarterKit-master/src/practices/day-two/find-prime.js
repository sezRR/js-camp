function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = numbers[i] <= 1 ? false : true

        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j === 0) isPrime = false
        }

        const message = " a prime number!"

        isPrime ? console.log(numbers[i] + " is" + message) : console.log(numbers[i] + " is NOT" + message)
    }
}

findPrime(42, 15, 6, 3, 1, 2, 0, -6)
/* OUTPUT:

42 is NOT a prime number!
15 is NOT a prime number!
6 is NOT a prime number!
3 is a prime number!
1 is NOT a prime number!
2 is a prime number!
0 is NOT a prime number!
-6 is NOT a prime number!

*/

findPrime(2, 5, 8, 21, 13)
/* OUTPUT:

2 is a prime number!
5 is a prime number!
8 is NOT a prime number!
21 is NOT a prime number!
13 is a prime number!

*/

findPrime(3, 5)
/* OUTPUT:

3 is a prime number!
5 is a prime number!

*/