// 11) intersect
// Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

/* intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => [] */

// 12) mirrorArray
// Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

/* mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ] */

// 13) abbreviate
// Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

/*
abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you' */

// 14) adults
// Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

/* const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ] */

// 15) countScores
// Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

// Example 1:
/* const ppl = [
  { name: "Anthony", score: 10 },
  { name: "Fred", score : 10 },
  { name: "Anthony", score: -8 },
  { name: "Winnie", score: 12 }
];
countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 } */

// Example 2
/* const peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];

countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 } */

// 16) firstNPrimes
// Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

/* firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7] */

// 17) peakFinder
// Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

/* peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8] */

// 18) divisibleByThreePairSum
// Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

/*
const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]] */

// 19) zipArray
// Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

/*
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ] */

// 20) twoDimensionalTotal
// Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

/* const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1);  // => 40

const arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2);  // => 15 */
