// 1) logBetween
// Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum

const logBetween = (num1, num2) => {
    if (num1 > num2) {
        return [];
    }
    let newArr = [];
    for (let i = num1; i <= num2; i++) {
        newArr.push(i);
    }
    return newArr;
};
// console.log(logBetween(-1, 2)); // => [-1, 0, 1, 2]
// console.log(logBetween(14, 6)); // => []
// console.log(logBetween(4, 6)); // => [4, 5, 6]

// 2)logBetweenStepper
// Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

const logBetweenStepper = (min, max, step) => {
    let newArr = [];
    for (let i = min; i < max; i += step) {
        newArr.push(i);
    }
    return newArr;
};

// console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
// console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]

// 3) printReverse
// Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

const printReverse = (min, max) => {
    let newArr = [];
    for (let i = max - 1; i > min; i--) {
        newArr.push(i);
    }
    return newArr;
};

// console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
// console.log(printReverse(90, 94)); // => [93, 92, 91]

// 4) fizzBuzz
// Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

const fizzBuzz = (num) => {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue;
        } else if (i % 5 === 0) {
            newArr.push(i);
        } else if (i % 3 === 0) {
            newArr.push(i);
        }
    }
    return newArr;
};

// console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

// 5) isPrime
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

const isPrime = (num) => {
    if (num <= 2) {
        return true;
    }
    for (let i = 3; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true

// 6) maxValue
// Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

const maxValue = (arr) => {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, 0);
};

// console.log(maxValue([12, 6, 43, 2])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43

// 7) console.log(myIndexOf
// Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

// CONSTRAINT: Do not use the indexOf or includes method

const myIndexOf = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }

    return -1;
};

// console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
// console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1

// 8) factorArray
// Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

const factorArray = (arr, number) => {
    return arr.filter((num) => number % num === 0).map((num) => num);
};

// console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2,4,5]
// console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
// console.log(factorArray([10, 15, 20, 25], 5)); // => []

// 9) oddRange
// Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

const oddRange = (end) => {
    let newArr = [];

    for (let i = 0; i <= end; i++) {
        if (i % 2 !== 0) {
            newArr.push(i);
        }
    }

    return newArr;
};
// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6)); // => [ 1, 3, 5 ]

// 10) reverseHyphenString
// Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

const reverseHyphenString = (str) => {
    /*  let newArr = str.split("-");
    let result = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        result.push(newArr[i]);
    }
    return result.join("-"); */
    return str.split("-").reverse().join("-");
};

console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
