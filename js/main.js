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