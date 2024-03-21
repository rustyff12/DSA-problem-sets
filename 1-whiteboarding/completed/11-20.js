// 11) intersect
// Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

const intersect = (arr1, arr2) => {
    /* let result = [];
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];

        if (arr2.includes(element)) {
            result.push(element);
        }
    }
    return result; */
    return arr1.filter((element) => arr2.includes(element));
};

// console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); // => [ 'b', 'd' ]
// console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); // => []

// 12) mirrorArray
// Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

const mirrorArray = (array) => {
    let reversed = array.slice(0);
    return array.concat(reversed.reverse());
};

// console.log(mirrorArray([1, 2, 3]));
// // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(["a", "b", "c", "d"]));
// // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// 13) abbreviate
// Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];
const vowels = ["a", "e", "i", "o", "u"];
const abbreviate = (sen) => {
    /* let arr = sen.split(" ");
    let newStr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.length > 4) {
            let newWord = [];
            for (let j = 0; j < element.length; j++) {
                const char = element[j];
                if (!vowels.includes(char)) {
                    newWord.push(char);
                }
            }
            newStr.push(newWord.join(""));
        } else {
            newStr.push(element);
        }
    }
    return newStr.join(" "); */

    return sen
        .split(" ")
        .map((word) => {
            if (word.length > 4) {
                return word.replace(/[aeiou]/g, "");
            }
            return word;
        })
        .join(" ");
};

// console.log(abbreviate("the bootcamp is fun")); // => 'the btcmp is fun'
// console.log(abbreviate("programming is fantastic")); // => 'prgrmmng is fntstc'
// console.log(abbreviate("hello world")); // => 'hll wrld'
// console.log(abbreviate("how are you")); // => 'how are you'

// 14) adults
// Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

/* const ppl = [
    { name: "John", age: 20 },
    { name: "Jim", age: 13 },
    { name: "Jane", age: 18 },
    { name: "Bob", age: 7 },
]; */
const adults = (people) => {
    let names = [];
    for (const person of people) {
        if (person.age >= 18) {
            names.push(person.name);
        }
    }
    return names;
};
// console.log(adults(ppl)); // => [ 'John', 'Jane' ]

// 15) countScores
// Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

// Example 1:
/* const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score: 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 },
]; */

const countScores = (people) => {
    let result = {};
    for (const person of people) {
        if (result[person.name] === undefined) {
            result[person.name] = person.score;
        } else {
            result[person.name] += person.score;
        }
    }
    Object.entries(result).sort(([, a], [, b]) => a - b);
    return result;
};

// console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
/*
// Example 2
const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
]; */

// console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

// 16) firstNPrimes
// Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.
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
// console.log(isPrime(4));
const firstNPrimes = (n) => {
    let primeArr = [];
    let num = 2;
    while (primeArr.length < n) {
        if (isPrime(num)) {
            primeArr.push(num);
        }
        num++;
    }
    return primeArr;
};

// console.log(firstNPrimes(0)); // => []
// console.log(firstNPrimes(1)); // => [2]
// console.log(firstNPrimes(4)); // => [2, 3, 5, 7]

// 17) peakFinder
// Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

// const testArr = [1, 2, 3, 4, 5, 6];
// console.log(testArr.slice(0, 3));

const peakFinder = (arr) => {
    let peakArr = [];
    /* for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            if (arr[i] > arr[i + 1]) {
                peakArr.push(i);
            }
        } else if (i === arr.length - 1) {
            if (arr[i] > arr[i - 1]) {
                peakArr.push(i);
            }
        } else if (i > 0 && i < arr.length - 3) {
            let temp = arr.slice(i, i + 3);
            if (temp[1] > temp[0] && temp[1] > temp[2]) {
                peakArr.push(i + 1);
            }
        }
	} */
    for (let i = 0; i < arr.length; i++) {
        if (
            (i === 0 || arr[i] > arr[i - 1]) &&
            (i === arr.length - 1 || arr[i] > arr[i + 1])
        ) {
            peakArr.push(i);
        }
    }
    return peakArr;
};

// console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

// 18) divisibleByThreePairSum
// Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

const divisibleByThreePairSum = (arr) => {
    let indicesArr = [];
    for (let i = 0; i < arr.length; i++) {
        const first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const second = arr[j];
            if ((first + second) % 3 === 0) {
                indicesArr.push([i, j]);
            }
        }
    }
    return indicesArr;
};

// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2); // => [[1, 3]]

// 19) zipArray
// Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

const zipArray = (arr1, arr2) => {
    let zippedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        const first = arr1[i];
        const second = arr2[i];
        zippedArr.push([first, second]);
    }
    return zippedArr;
};

/* const a1 = ["a", "b", "c", "d"];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ] */

// 20) twoDimensionalTotal
// Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

const twoDimensionalTotal = (arr) => {
    let sum = 0;
    arr.forEach((row) => {
        row.forEach((element) => {
            sum += element;
        });
    });
    return sum;
};

const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // => 40

const arr2 = [[2], [1, 9], [1, 1, 1]];

console.log(twoDimensionalTotal(arr2)); // => 15

// 18) alternate. O(n) time complexity but also O(n) space complexity compare to O(n^2) and O(1)
/*
const divisibleByThreePairSum = (arr) => {
    const remainders = [ [], [], [] ]; // Store indices of elements with remainder 0, 1, and 2 when divided by 3
    const indicesArr = [];

    // Populate remainders array
    arr.forEach((num, index) => {
        remainders[num % 3].push(index);
    });

    // Find pairs that sum to a multiple of 3
    for (let i = 0; i < remainders[0].length; i++) {
        for (let j = 0; j < remainders[1].length; j++) {
            indicesArr.push([remainders[0][i], remainders[1][j]]);
        }
    }

    for (let i = 0; i < remainders[2].length - 1; i++) {
        for (let j = i + 1; j < remainders[2].length; j++) {
            indicesArr.push([remainders[2][i], remainders[2][j]]);
        }
    }

    return indicesArr;
};

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
 */
