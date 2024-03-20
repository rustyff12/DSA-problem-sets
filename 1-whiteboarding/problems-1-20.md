#### `logBetween`

Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

Examples:

```

logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]
```

#### `logBetweenStepper`

Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

Examples:

```

logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
```

#### `printReverse`

Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

Examples:

```

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]
```

#### `fizzBuzz`

Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

Examples:

```

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
```

#### `isPrime`

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

Examples:

```

isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true
```

#### `maxValue`

Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

Examples:

```

maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43
```

#### `myIndexOf`

Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

CONSTRAINT: Do not use the indexOf or includes method

Examples:

```

myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1
```

#### `factorArray`

Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

Examples:

```

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []
```

#### `oddRange`

Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

Examples:

```

oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]
```

#### `reverseHyphenString`

Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

Examples:

```

reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"
```

#### `intersect`

Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

Examples:

```

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
```

#### `mirrorArray`

Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

Examples:

```

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
```

#### `abbreviate`

Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

```

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
```

#### `adults`

Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

Example:

```
const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
```

#### `countScores`

Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

```
Example 1:
const ppl = [
  { name: "Anthony", score: 10 },
  { name: "Fred", score : 10 },
  { name: "Anthony", score: -8 },
  { name: "Winnie", score: 12 }
];
countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2
const peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];

countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }
```

#### `firstNPrimes`

Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

Examples:

```

firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]
```

#### `peakFinder`

Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

Examples:

```

peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]
```

#### `divisibleByThreePairSum`

Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

Examples:

```

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]
```

#### `zipArray`

Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

Examples:

```

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
```

#### `twoDimensionalTotal`

Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

```

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1);  // => 40

const arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2);  // => 15
```
