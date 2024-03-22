// 41) threeIncreasing
// Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

const threeIncreasing = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
        const toCheck = arr.slice(i, i + 3);
        const firstNum = toCheck[0];
        if (toCheck[1] === firstNum + 1 && toCheck[2] === firstNum + 2) {
            return true;
        }
    }
    return false;
};

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false

// 42) reverse2D
// Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

const reverse2D = (arr) => {
    let resStr = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            resStr += arr[i][j];
        }
    }
    return resStr;
};

/* const arr1 = [
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
];

console.log(reverse2D(arr1)); // => 'ihgfedcba'
const arr2 = [
    ["Julian", "Matt", "Mike"],
    ["Oscar", "Patrick"],
];
console.log(reverse2D(arr2)); // => 'PatrickOscarMikeMattJulian' */

// 43) reverb
// Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

const reverb = (word) => {
    const vowels = "aeiou";
    let index = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            index = i;
        }
    }

    return index === 0
        ? word
        : word.slice(0, index) + word.slice(index) + word.slice(index);
};

/* console.log(reverb("running")); // => 'runninging'
console.log(reverb("wild")); // => 'wildild'
console.log(reverb("debugged")); // => 'debuggeded'
console.log(reverb("my")); // => 'my' */

// 44) countRepeats
// Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

const countRepeats = (str) => {
    const charCount = {};
    let repeatCount = 0;

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2) {
            repeatCount++;
        }
    }
    return repeatCount;
};

/* console.log(countRepeats("calvin")); // => 0
console.log(countRepeats("caaaalvin")); // => 1
console.log(countRepeats("pops")); // => 1
console.log(countRepeats("mississippi")); // => 3
console.log(countRepeats("hellobootcampprep")); // => 4 */

// 45) pairsToString
// Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

const pairsToString = (arr) => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const char = element[0];
        const num = element[1];
        for (let j = 0; j < num; j++) {
            str += char;
        }
    }
    return str;
};

/* const array1 = [
    ["a", 3],
    ["b", 1],
    ["c", 2],
];
console.log(pairsToString(array1)); // => 'aaabcc'

const array2 = [
    ["f", 1],
    ["o", 2],
    ["d", 1],
    ["!", 1],
];
console.log(pairsToString(array2)); // => 'food!' */

// 46) countAdjacentSums
// Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

const countAdjacentSums = (arr, n) => {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
};

/* console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3 */

// 47) signFlipCount
// Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

const signFlipCount = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        const first = nums[i];
        const second = nums[i + 1];
        if ((first < 0 && second > 0) || (first > 0 && second < 0)) {
            count++;
        }
    }
    return count;
};

/* console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3 */

// 48) powerSequence
// Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

// The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

const powerSequence = (base, length) => {
    let powerArr = [];
    for (let i = 1; i <= length; i++) {
        powerArr.push(base ** i);
    }
    return powerArr;
};

/* console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ] */

// 49) collapseString
// Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

// Hint: use the keyword continue

const collapseString = (str) => {
    let collapsedStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            continue;
        }
        collapsedStr += str[i];
    }
    return collapsedStr;
};
/*
console.log(collapseString("apple")); // => 'aple'
console.log(collapseString("AAAaalviiiiin!!!")); // => 'Aalvin!'
console.log(collapseString("hello   app academy")); // => 'helo ap academy'
 */
// 50) oddWordsOut
// Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

const oddWordsOut = (sen) => {
    return sen
        .split(" ")
        .filter((word) => word.length % 2 === 0)
        .join(" ");
};

console.log(oddWordsOut("go to the store and buy milk")); // => 'go to milk'
console.log(oddWordsOut("what is the answer")); // => 'what is answer'

/* ============================================== */
// 44)
/* const countRepeatsAlt = (str) => {
    const arr = str.split("");
    let obj = {};
    let res = 0;
    for (const char of arr) {
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    const objVals = Object.values(obj);
    for (let j = 0; j < objVals.length; j++) {
        if (objVals[j] > 1) {
            res++;
        }
    }
    return res;
}; */
