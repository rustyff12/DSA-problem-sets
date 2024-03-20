// 1) logBetween
// Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum

logBetween(-1, 2); // => [-1, 0, 1, 2]
logBetween(14, 6); // => []
logBetween(4, 6); // => [4, 5, 6]

// 2)logBetweenStepper
// Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

/* logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15] */

// 3) printReverse
// Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

/*
printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91] */

// 4) fizzBuzz
// Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

// fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

// 5) isPrime
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

/* isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true */

// 6) maxValue
// Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

/*
maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43 */

// 7) myIndexOf
// Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

// CONSTRAINT: Do not use the indexOf or includes method

/* myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1 */

// 8) factorArray
// Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

/* factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => [] */

// 9) oddRange
// Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

/*
oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ] */

// 10) reverseHyphenString
// Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

/* reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump," */
