// 31) lcm
// Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

/* lcm(2, 3);  // => 6
lcm(6, 10);  // => 30
lcm(24, 26);  // => 312 */

// 32) hipsterfyWord
// Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

/*
hipsterfyWord('proper') // => 'propr'
hipsterfyWord('tonic') // => 'tonc'
hipsterfyWord('PANTHER') // => 'PANTHR'
hipsterfyWord('BACKWARDS') // => 'BACKWRDS' */

// 33) hipsterfy
// Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

/* hipsterfy("proper");  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
hipsterfy("towel flicker banana");  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris" */

// 34) objectToString
// Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

/* objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
objectToString({ b: 1, o: 2, t: 1 }) // => 'boot' */

// 35) shortestWord
// Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

/*
shortestWord('app academy is cool') // => 'is'
shortestWord('programming bootcamp') // => 'bootcamp' */

// 36) greatestCommonFactor
// Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

/* greatestCommonFactor(15, 25) // => 5
greatestCommonFactor(16, 24) // => 8
greatestCommonFactor(7, 11) // => 1 */

// 37) isPassing
// Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

/* const assessments1 = [
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

isPassing(assessments2) // => false */

// 38) valueConcat
// Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

/* const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ] */

// 39) threeInARow
// Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

/* threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
threeInARow([10, 9, 20, 33, 3, 3]);  // => false; */

// 40) variableNameify
// Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

/* variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue' */
