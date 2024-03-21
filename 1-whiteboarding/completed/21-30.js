// 21) countInnerElement
// Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

const countInnerElement = (arr) => {
    let obj = {};
    arr.forEach((row) => {
        row.forEach((item) => {
            if (obj[item] === undefined) {
                obj[item] = 1;
            } else {
                obj[item] += 1;
            }
        });
    });
    return obj;
};

/* const arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7],
]; */

// console.log(countInnerElement(arr1)); // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

/* const arr2 = [
    ["a", "b", "c", "d"],
    ["a", "b"],
    ["a", "c", "d", "a"],
]; */

// console.log(countInnerElement(arr2)); // => {a: 4, b: 2, c: 2, d: 2}

// 22) twoDiff
// Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

// NOTE: The pairs are unique. HINT: Account for negative difference too!

const twoDiff = (arr) => {
    let twoDiffArrr = [];
    for (let i = 0; i < arr.length; i++) {
        const first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const second = arr[j];
            if (first - second === 2 || second - first === 2) {
                twoDiffArrr.push([i, j]);
            }
        }
    }
    return twoDiffArrr;
};

// console.log(twoDiff([2, 3, 4, 6, 1, 7])); // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5])); // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([])); // => []

// 23) arrayDiff
// Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

// Note: Assume both arrays have unique elements.

const arrayDiff = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        if (arr1.indexOf(element) !== -1) {
            const toSplice = arr1.indexOf(element);
            arr1.splice(toSplice, 1);
        }
    }

    return arr1;
};

/* const array1 = [1, 23, 2, 43, 3, 4];
const array2 = [3, 23]; */
// console.log(arrayDiff(array1, array2)); // => [1, 2, 43 ,4]

/* const array3 = ["a", "ab", "c", "d", "c"];
const array4 = ["d"]; */
// console.log(arrayDiff(array3, array4)); // => ['a', 'ab', 'c', 'c']

// 24) valueCounter
// Write a function valueCounter(obj, val) that takes in an object and a value, the function should return the number of times val repeats as a value in obj.

const valueCounter = (obj, val) => {
    let sum = 0;
    for (const key of Object.values(obj)) {
        if (key === val) {
            sum++;
        }
    }
    // console.log(obj);
    return sum;
};

/* const obj1 = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
console.log(valueCounter(obj1, "Anne")); // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
console.log(valueCounter(obj2, 88)); // => 0

const pairs = { Anne: "Roman", Alvin: "Roman", JJ: "Anne", Roman: "Anne" };
console.log(valueCounter(pairs, "Roman")); // => 2 */

// 25) elementCount
// Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

const elementCount = (arr) => {
    let obj = {};

    for (const value of arr) {
        if (obj[value] === undefined) {
            obj[value] = 1;
        } else {
            obj[value] += 1;
        }
    }

    return obj;
};

// console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
// console.log(elementCount(["c", "a", "c", "a", "b"])); // => { "c": 2, "a": 2, "b": 1 }

// 26) nextTwoPrimes
// Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

const isPrime = (n) => {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const nextTwoPrimes = (n) => {
    let resArr = [];
    let start = n + 1;
    while (resArr.length < 2) {
        if (isPrime(start)) {
            resArr.push(start);
        }
        start++;
    }
    return resArr;
};

/* console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
 */

// 27) pairProduct
// Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num. It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

// CONSTRAINT: Use only while loops. No for loops.

const pairProduct = (arr, num) => {
    let resArr = [];
    let i = 0;
    let j = 1;

    while (i < arr.length) {
        let index1 = arr[i];
        // console.log(index1);
        let j = i + 1;
        while (j < arr.length) {
            let index2 = arr[j];
            // console.log(index2);
            if (index1 * index2 === num) {
                resArr.push([i, j]);
            }
            j++;
        }
        i++;
    }
    return resArr;
};

/* console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ] */

// 28) twoDimensionalSize
// Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

const twoDimensionalSize = (array) => {
    let count = 0;
    array.forEach((row) => {
        row.forEach((element) => {
            count++;
        });
    });
    return count;
};

/* const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
];
let res1 = twoDimensionalSize(arr1); // => 9
console.log(res1);
const arr2 = [["a"], ["b", "c", "d", "e"]];
let res2 = twoDimensionalSize(arr2); // => 5
console.log(res2); */

// 29) longWordCount
// Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

const longWordCount = (string) => {
    let count = 0;
    string.split(" ").filter((word) => (word.length > 7 ? count++ : count));
    return count;
};

/* console.log(longWordCount("")); // => 0
console.log(longWordCount("short words only")); // => 0
console.log(longWordCount("one reallylong word")); // => 1
console.log(longWordCount("two reallylong words inthisstring")); // => 2
console.log(longWordCount("allwordword longwordword wordswordword")); // => 3
console.log(longWordCount("seventy schfifty five")); // => 1 */

// 30) factorial
// Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(factorial(1)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800
