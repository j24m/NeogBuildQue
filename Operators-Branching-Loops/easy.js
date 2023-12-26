//Q1. WAP to add 5 numbers.
function add(...rest) {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum = sum + rest[i];
  }
  return sum;
}
console.log(add(5, 13, 7, 21, 48));

//Q2. Write a program to take a number input from user and determine whether the number is odd or even.
function oddOrEven(num) {
  num % 2 === 0 ? console.log("Even") : console.log("Odd");
}
oddOrEven(6);

//Q3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
function maxAndMin(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater and ${num2} is smaller.`);
  } else {
    console.log(`${num2} is greater and ${num1} is smaller.`);
  }
}

maxAndMin(129, 251);

//Q4 Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

let num1 = 8;
let num2 = 23;
let num3 = 17;
if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the largest.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is the largest.`);
} else {
  console.log(`${num3} is the largest.`);
}

//Q5 Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num4 = 35;
let num5 = 29;
let num6 = 46;
if (num4 < num5 && num4 < num6) {
  console.log(`${num4} is the smallest.`);
} else if (num5 < num4 && num5 < num6) {
  console.log(`${num5} is the smallest.`);
} else {
  console.log(`${num6} is the smallest.`);
}

//Q6 Write program to take a month as an input from the user and find out whether the month has 31 days or not.

function checkIfMonthHas31Days(month) {
  let monthsWith31Days = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
  ];
  for (let i = 0; i < monthsWith31Days.length; i++) {
    if (month.toLowerCase() === monthsWith31Days[i].toLowerCase()) {
      console.log(`${month} has 31 days.`);
      return;
    }
  }
  console.log(`${month} does not have 31 days.`);
}
checkIfMonthHas31Days("January");
