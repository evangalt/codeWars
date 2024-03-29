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

// Return the complement of each DNA strand (e.g. for string ATCG, return TAGC)

function DNAStrand(dna){
    //your code here
    // split the string into individual elements of an array
    let newArr = dna.split('');
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
        case 'A':
          newArr[i] = 'T';
          break;
        case 'T':
          newArr[i] = 'A';
          break;
        case 'C':
          newArr[i] = 'G';
          break;
        case 'G':
          newArr[i] = 'C';
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
    } return newArr.join('');
  }
  
  console.log(DNAStrand('AACGTCA'));

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b) {
    let sum = 0;
    if (a === b) {
      return a;
    } else if (a < b) {
      for (let i = a; i <= b; i++) {
        sum += i;
      } return sum;
    } else if (b < a) {
      for (let i = b; i <= a; i++) {
        sum += i;
      } return sum;
    }
}

// Alternative solution
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
    // convert the string into an array
    let arr = cc.split('');
    // check if the array length is <= 4 elements
    if (arr.length <= 4) {
      // if it is, return the original string;
      return arr.join('');
    }  
    // else loop through the array and change every element to a #, up to arr.length - 4
    else for (let i  = 0; i < arr.length - 4; i++) {
      arr[i] = '#';
    } return arr.join('');
  }

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.
function openOrSenior(data){
    let membershipArray = [];
    // loop through array
    for (let i = 0; i < data.length; i++) {
        let arrayElement = data[i];
        // assign first value of each element to age
        let age = arrayElement[0];
        // assign second value of each element to handicap
        let handicap = arrayElement[1];
        if (age >= 55 && handicap > 7) {
        membershipArray.push('Senior');
        } else membershipArray.push('Open');
    }
    // return list of string values for "Open" or "Senior"
    return membershipArray;
}

// Alternative using .map
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
};

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = arr => {
    // flip the array
    let reversedArray = arr.reverse();
    let total = 0;
    console.log(reversedArray);
    // for every element, if el = 1, el = 2^index
    reversedArray.forEach((num, index) => {
        if (num === 1) {
          let binaryNum = Math.pow(2, index);
          total += binaryNum;
        };
    });
    return total;
};

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let population = p0;
    let convertedPercent = percent/100;
    let populationIncrease = population + (population * convertedPercent) + aug;
    let numYears = 0;
  
    while (population < p) {
      population = Math.floor(populationIncrease);
      populationIncrease = population + (population * convertedPercent) + aug;
      numYears++;
    }
    
    return numYears;
  }

// For integer n, return a string that counts sheep up to n. E.g. if n = 2, return "1 sheep... 2 sheep..."

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }

// Return the sum of the two smallest numbers in an array
function sumTwoSmallestNumbers(numbers) {  
    const sortedNums = numbers.sort((a,b) => a - b);
    const sum = sortedNums[0] + sortedNums[1];
    return sum;
}

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
function printerError(s) {
  let sArray = s.split('');
  let sLength = sArray.length;
  let numErrors = 0;
  for (let i = 0; i < sArray.length; i ++) {
    if (sArray[i] > "m") {
      numErrors++;
    }
  }
  let errorString = `${numErrors}/${sLength}`;
  return errorString;
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
function spinWords(string){
  let wordsArray = string.split(' ');
  let sillyArray = [];
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    if (word.length > 4) {
      word = word.split('').reverse().join('');
      sillyArray.push(word);
    } else sillyArray.push(word);
  }
  return sillyArray.join(' ');
}

// Find the value that appears an odd number of times
function findOdd(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts[num] = (counts[num] || 0) + 1;
  }
  for (const num in counts) {
    if (counts[num] % 2 === 1) {
      return parseInt(num);
    }
  }
}
// Implement a function that adds two numbers together and returns their sum in binary. 
// The binary number returned should be a string.
function addBinary(a, b) {
  let sum = a + b;
  let binary = '';

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }

  return binary || '0';
}
// For a total number of bus stops, return the total number of people still on the bus (after each bus stop has unloaded and loaded new passengers)
var number = function(busStops){
  // add up all the first elements in each array
  // add up all the second elements
  let onBus = 0;
  let offBus = 0;
  let diff = 0;
  busStops.forEach(arr => {
    onBus += arr[0];
    offBus += arr[1];
  })
  // get the difference of the two
  diff = onBus - offBus;
  return diff;
}
// simple rock paper scissors
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
  } else if (p1 === "rock") {
    if (p2 === "scissors") {
      return "Player 1 won!"
    } else return "Player 2 won!"
  } else if (p1 === "paper") {
    if (p2 === "rock") {
      return "Player 1 won!"
    } else return "Player 2 won!"
  } else if (p1 === "scissors") {
    if (p2 === "paper") {
      return "Player 1 won!"
    } else return "Player 2 won!"
  }
}
// find whether the sum of an array's elements is odd or even
function oddOrEven(array) {
  let sum = 0;
  
  if (array.length === 0) {
    return 'even';
  } else {
    array.forEach(num => {
      sum += num;
    });

    if (sum % 2 === 0 || sum % 2 === -0) {
      return 'even';
    } else if (sum % 2 === 1 || sum % 2 === -1) {
      return 'odd';
    }
  }
};
// get class grade
function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3)/3;
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else return 'F';
}
// combine two strings, remove duplicates, and sort them alphabetically
function longest(s1, s2) {
  let result = '';

  for (let i = 0; i < s1.length; i++) {
    if (result.indexOf(s1[i]) === -1) {
      result += s1[i];
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (result.indexOf(s2[i]) === -1) {
      result += s2[i];
    }
  }
  return result.split('').sort().join('');
}
// Hogben's centered polygonal numbers
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
// find the total points your team scored in a championship tournament with the score format ["1:0","3:1"... etc.]
function points(games) {
  let totalPoints = 0;
  let x = 0;
  let y = 0;
  games.forEach(game => {
    if (game[0] > game[2]) {
      totalPoints += 3;
    } else if (game[0] === game[2]) {
      totalPoints += 1;
    }
  })
  console.log(totalPoints);
  return totalPoints;
}
// change the color of the street light depending on the input
function updateLight(current) {
  
 switch (current) {
  case 'green':
    return 'yellow';
  case 'yellow':
    return 'red';
  case 'red':
    return 'green';
 }
}
// return the min and max of an array
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
// remove the minimum from an array and return a new array without modifying the original
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  const min = Math.min(...numbers);
  const minIndex = numbers.indexOf(min);
  const newArr = [...numbers.slice(0,minIndex),...numbers.slice(minIndex+1)];
  return newArr;
}
// if given a square, return its area; otherwise return the polygon's perimeter
const areaOrPerimeter = function(l , w) {
  return (l === w) ? l * w : (2 * l + 2 * w);
};
// return the average of an array of test scores, rounded down
function getAverage(marks){
  let sum = 0;
  let average = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum/(marks.length));
}
// find min and max values from an array
function max(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
          max = numbers[i];
      }
  }
  return max;
}

function min(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) {
          min = numbers[i];
      }
  }
  return min;
}