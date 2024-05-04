// Q1 Print all even numbers from 0 to 10:

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Q2 Create a length converter function:

function lengthConverter(value, fromUnit, toUnit) {
    const units = {
        'cm': 1,
        'm': 100,
        'in': 2.54,
        'ft': 30.48
    };

    return value * units[fromUnit] / units[toUnit];
}
console.log(lengthConverter(10, 'cm', 'm'));

// Q3 Calculate the sum of numbers within an array:

function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Q4 Create a function that reverses an array:

function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]));


// Q5 Sort an array from lowest to highest:

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 2, 9, 1, 3])); 

// Q6 Create a function that filters out negative numbers:

function filterNegatives(arr) {
    return arr.filter(num => num >= 0);
}
console.log(filterNegatives([-1, 2, -3, 4, -5])); 

// Q7 Remove the spaces found in a string:

function removeSpaces(str) {
    return str.replace(/\s/g, '');
}
console.log(removeSpaces("Hello World")); 

// Q8 Return a Boolean if a number is divisible by 10:

function isDivisibleBy10(num) {
    return num % 10 === 0;
}
console.log(isDivisibleBy10(30));


// Q9 Return the number of vowels in a string:

function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels("Hello")); 


// Q10 Print a table containing multiplication tables:


function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = '';
        for (let j = 1; j <= 10; j++) {
            row += `${i * j}\t`;
        }
        console.log(row);
    }
}
printMultiplicationTable();
