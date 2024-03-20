#### `threeIncreasing`

Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

Examples:

```

threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false
```

#### `reverse2D`

Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

Examples:

```

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'
```

#### `reverb`

Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

Examples:

```

reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'
```

#### `countRepeats`

Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

Examples:

```

countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
countRepeats('hellobootcampprep'); // => 4
```

#### `pairsToString`

Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

Examples:

```

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
pairsToString(array1);  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
pairsToString(array2);  // => 'food!'
```

#### `countAdjacentSums`

Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

Examples:

```

countAdjacentSums([1, 5, 1], 6) // => 2
countAdjacentSums([7, 2, 4, 6], 7) // => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
```

#### `signFlipCount`

Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

Examples:

```

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3
```

#### `powerSequence`

Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

Examples:

```

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]
```

#### `collapseString`

Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

Hint: use the keyword continue

Examples:

```

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'
```

#### `oddWordsOut`

Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

Examples:

```

oddWordsOut('go to the store and buy milk');  // => 'go to milk'
oddWordsOut('what is the answer');  // => 'what is answer'
```

#### `mindPsAndQs`

Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

Nested loops not needed!

Examples:

```

mindPsAndQs('BOOTCAMP');  // => 1
mindPsAndQs('APCDQQPPC');  // => 4
mindPsAndQs('PQPQ');  // => 4
mindPsAndQs('PPPXQPPPQ');  // => 5
```

#### `commonFactors`

Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

Examples:

```

commonFactors(12, 50);  // => [ 1, 2 ]
commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
commonFactors(11, 22);  // => [ 1, 11 ]
commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]
```

#### `commonPrimeFactors`

Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

Examples:

```

commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]
```

#### `splitHalfArray`

Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

Examples:

```

splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
```

#### `threeUniqueVowels`

Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

```

threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false
```

#### `vowelShift`

Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

```

vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'
```

#### `hasSymmetry`

Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

Examples:

```

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
```

#### `evenSumArray`

Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

Examples:

```

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
```

#### `numsToWords`

Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

Examples:

```

numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'
```

#### `moreDotLessDash`

Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

Examples:

```

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
```
