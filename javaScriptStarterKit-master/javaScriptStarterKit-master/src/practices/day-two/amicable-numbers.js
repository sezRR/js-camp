function findAmicableNumbers(number1, number2) {

    let divisorOfNumber1 = findSumOfDivisors(number1)
    let divisorOfNumber2 = findSumOfDivisors(number2)

    const message = `${number1} and ${number2} are`

    divisorOfNumber1 === number2 && divisorOfNumber2 === number1 ? console.log(message + " a amicable numbers!") : console.log(message + " NOT a amicable numbers!")
}

const findSumOfDivisors = (number) => {
    let sum = 0

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) sum += i
    }

    return sum;
}

findAmicableNumbers(220, 284)
findAmicableNumbers(1184, 1210)
findAmicableNumbers(2620, 2924)
findAmicableNumbers(5020, 5564)
findAmicableNumbers(6232, 6368)
findAmicableNumbers(10744, 10856)
findAmicableNumbers(12285, 14595)
findAmicableNumbers(17296, 18416)
findAmicableNumbers(63020, 76084)
findAmicableNumbers(66928, 66992)

findAmicableNumbers(210, 274)

/* OUTPUT:

220 and 284 are a amicable numbers!
1184 and 1210 are a amicable numbers!
2620 and 2924 are a amicable numbers!
5020 and 5564 are a amicable numbers!
6232 and 6368 are a amicable numbers!
10744 and 10856 are a amicable numbers!
12285 and 14595 are a amicable numbers!
17296 and 18416 are a amicable numbers!
63020 and 76084 are a amicable numbers!
66928 and 66992 are a amicable numbers!

210 and 274 are NOT a amicable numbers!

*/