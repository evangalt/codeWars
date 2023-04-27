// Multiples of 3 or 5
// Description
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    if (number < 0) {
      return 0;
    } else {
      let multiplesArray = [];
      for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          multiplesArray.push(i);
        };
      } 
      let sum = multiplesArray.reduce( (acc, curr) => acc + curr, 0 );
      return sum;
    };
  };

// Find Maximum and Minimum Values of a List
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

var min = function(list){
    let minValue = list[0];
    let nextValue;
    let currentValue;
    for (let i = 0; i < list.length; i++) {
      nextValue = list[i+1];
      currentValue = list[i];
      if (nextValue < currentValue && nextValue !== undefined) {
        minValue = nextValue;
      } else {
        minValue = currentValue;
      }
    }
    return minValue;
  };
  
  var max = function(list){
    let maxValue = list[0];
    let nextValue;
    let currentValue;
    for (let i = 0; i < list.length; i++) {
      nextValue = list[i+1];
      currentValue = list[i];
      if (nextValue > currentValue && nextValue !== undefined) {
        maxValue = nextValue;
      } else {
        maxValue = currentValue;
      }
    }
    return maxValue;
  };

// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let lettersArray = s.split("");
    let finalArray = [];
  
    // map each letter to the new array
    finalArray = lettersArray.map((letter, index) => {
      // capitalize the first letter of each segment and repeat the letter depending on its index
      return letter.toUpperCase() + letter.toLowerCase().repeat(index);
    });
    // join the elements of the array with a hyphen
    return finalArray.join('-');
}

// List Filtering
// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    let newList = [];
    l.forEach(item => {
        if (item < 0) {
            throw new Error('Only non-negative integers are allowed!')
        } else if (typeof item == 'number') {
        newList.push(item);
        }
    });
    return newList;
}

// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    // if the str is empty, return true
    let stringArray;
    if (str === '') {
      return true;
    } else {
      stringArray = str.toLowerCase().split('');
      for (let i = 0; i < stringArray.length; i++) {
        for (let j = i + 1; j < stringArray.length; j++) {
          if (stringArray[i] === stringArray[j]) {
            return false;
          }
        }
      } return true;
    }
  }

// alternative cleaner example using JS Sets, which filter down to unique values
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}