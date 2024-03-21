// 31) lcm
// Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

const lcm = (num1, num2) => {
    let max = num1 * num2;
    for (let i = num1; i <= max; i += num1) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
};

/* console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312 */

// 32) hipsterfyWord
// Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

const hipsterfyWord = (word) => {
    const vowels = "aeiou";
    let index = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            index = i;
        }
    }

    return word.slice(0, index) + word.slice(index + 1);
};

/* console.log(hipsterfyWord("proper")); // => 'propr'
console.log(hipsterfyWord("tonic")); // => 'tonc'
console.log(hipsterfyWord("PANTHER")); // => 'PANTHR'
console.log(hipsterfyWord("BACKWARDS")); // => 'BACKWRDS' */

// 33) hipsterfy
// Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

const hipsterfy = (sentence) => {
    let arr = sentence.split(" ");
    let resArr = [];
    arr.forEach((word) => {
        resArr.push(hipsterfyWord(word));
    });
    return resArr.join(" ");
};

/* console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris" */

// 34) objectToString
// Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

const charCount = (char, num) => {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += char;
    }
    return str;
};

const objectToString = (count) => {
    let str = "";
    let key = Object.keys(count);
    let val = Object.values(count);
    for (let i = 0; i < key.length; i++) {
        const char = key[i];
        const num = val[i];
        str += charCount(char, num);
    }

    return str;
};
/*
console.log(objectToString({ a: 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot' */

// 35) shortestWord
// Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

const shortestWord = (sentence) => {
    return sentence.split(" ").reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    });
};

// console.log(shortestWord("app academy is cool")); // => 'is'
// console.log(shortestWord("programming bootcamp")); // => 'bootcamp'

// 36) greatestCommonFactor
// Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

const greatestCommonFactor = (num1, num2) => {
    let gcf;
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcf = i;
        }
    }
    return gcf || 1;
};

// console.log(greatestCommonFactor(15, 25)); // => 5
// console.log(greatestCommonFactor(16, 24)); // => 8
// console.log(greatestCommonFactor(7, 11)); // => 1

// 37) isPassing
// Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

const isPassing = (assessments) => {
    let totatlScore = 0;
    for (const scores of assessments) {
        totatlScore += scores.score;
    }
    return totatlScore / assessments.length > 70 ? true : false;
};

/* const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 },
];

console.log(isPassing(assessments1)); // => true
const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 },
];

console.log(isPassing(assessments2)); // => false */

// 38) valueConcat
// Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

const valueConcat = (arr, obj) => {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (obj[element] !== undefined) {
            resArr.push(element + obj[element]);
        } else {
            resArr.push(element);
        }
    }
    return resArr;
};

/* const arr = ["alex", "maurice", "meagan", "ali"];
const obj = { alex: "bronca", ali: "harris" };
console.log(valueConcat(arr, obj)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(["a", "b", "c"], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ] */

// 39) threeInARow
// Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

const threeInARow = (arr) => {
    let res = false;
    for (let i = 0; i < arr.length - 2; i++) {
        const toCheck = arr.slice(i, i + 3);
        if (toCheck.every((element) => element === arr[i])) {
            res = true;
        }
    }
    return res;
};

// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;

// 40) variableNameify
// Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

const variableNameify = (words) => {
    let variableStr = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const firstLetter = word[0];
        variableStr += firstLetter.toUpperCase() + word.slice(1).toLowerCase();
    }
    return variableStr;
};

// console.log(variableNameify(["is", "prime"])); // => 'isPrime'
// console.log(variableNameify(["remove", "last", "vowel"])); // => 'removeLastVowel'
// console.log(variableNameify(["MaX", "VALUE"])); // => 'maxValue'
// console.log(variableNameify(["Russ", "and", "Vince"])); // => 'russAndVince'

/* ================================================================= */
/* const alph = "abcdefghijklmnopqrstuvwxyz";

const oppositeAlph = (str, char) => {
    let index = str.indexOf(char);
    count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (count === index) {
            return str[i];
        }
        count++;
    }
    // return reversedAlph;
};
console.log(oppositeAlph(alph, "")); */

// 34)
/* const objectToStringAlt = (count) => {
    let str = "";
    let keys = Object.keys(count);
    for (let i = 0; i < keys.length; i++) {
        const char = keys[i];
        const num = count[char];
        for (let j = 0; j < num; j++) {
            str += char;
        }
    }
    return str;
}; */
