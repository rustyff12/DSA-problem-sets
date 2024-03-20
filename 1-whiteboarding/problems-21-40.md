#### `countInnerElement`

Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

Examples:

```

const arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7]
]

countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}
```

#### `twoDiff`

Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

NOTE: The pairs are unique. HINT: Account for negative difference too!

Examples:

```


twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
twoDiff([])  // => []
```

#### `arrayDiff`

Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

Note: Assume both arrays have unique elements.

Examples:

```

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']
```

#### `valueCounter`

Write a function valueCounter(obj, val) that takes in an object and a value, the function should return the number of times val repeats as a value in obj.

Examples:

```

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2
```

#### `elementCount`

Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

Example:

```
elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
```

#### `nextTwoPrimes`

Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

Examples:

```

nextTwoPrimes(2);  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]
```

#### `pairProduct`

Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num. It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

CONSTRAINT: Use only while loops. No for loops.

Examples:

```

pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]
```

#### `twoDimensionalSize`

Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

Examples:

```

const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
twoDimensionalSize(arr1);  // => 9

const arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
twoDimensionalSize(arr2);  // => 5
```

#### `longWordCount`

Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

Examples:

```

longWordCount("");  // => 0
longWordCount("short words only");  // => 0
longWordCount("one reallylong word");  // => 1
longWordCount("two reallylong words inthisstring");  // => 2
longWordCount("allwordword longwordword wordswordword");  // => 3
longWordCount("seventy schfifty five");  // => 1
```

#### `factorial`

Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 _ 3 _ 2 \* 1 = 24.

Examples:

```

factorial(1);  // => 1
factorial(4);  // => 24
factorial(5);  // => 120
factorial(10);  // => 3628800
```

#### `lcm`

Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

Examples:

```

lcm(2, 3);  // => 6
lcm(6, 10);  // => 30
lcm(24, 26);  // => 312
```

#### `hipsterfyWord`

Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

Examples:

```

hipsterfyWord('proper') // => 'propr'
hipsterfyWord('tonic') // => 'tonc'
hipsterfyWord('PANTHER') // => 'PANTHR'
hipsterfyWord('BACKWARDS') // => 'BACKWRDS'
```

#### `hipsterfy`

Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

```

hipsterfy("proper");  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
hipsterfy("towel flicker banana");  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"
```

#### `objectToString`

Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

Examples:

```

objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
```

#### `shortestWord`

Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

Examples:

```

shortestWord('app academy is cool') // => 'is'
shortestWord('programming bootcamp') // => 'bootcamp'
```

#### `greatestCommonFactor`

Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

Examples:

```

greatestCommonFactor(15, 25) // => 5
greatestCommonFactor(16, 24) // => 8
greatestCommonFactor(7, 11) // => 1
```

#### `isPassing`

Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

Examples:

```

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

isPassing(assessments1) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

isPassing(assessments2) // => false
```

#### `valueConcat`

Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

Examples:

```

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]
```

#### `threeInARow`

Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

Examples:

```

threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
```

#### `variableNameify`

Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

Examples:

```

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'
```
