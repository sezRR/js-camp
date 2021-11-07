function findPerfectNumber(number) {
    return findSumOfDivisors(number) === number ? true : false
}

const findSumOfDivisors = (number) => {
    let sum = 0

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) sum += i
    }

    return sum;
}

for (let i = 1; i <= 1000; i++) {
    findPerfectNumber(i) ? console.log(i + " is  a perfect number!") : false
}

/* OUTPUT:

6 is  a perfect number!
28 is  a perfect number!
496 is  a perfect number!

*/
