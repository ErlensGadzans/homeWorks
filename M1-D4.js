/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
let l1 = 6;
let l2 = 8;

   const area = (l1, l2) => l1 * l2;

    console.log ("Rectangle area is:", area(l1, l2));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

let x = 9;
let y = 9;

function crazySum (x, y){
  //  return ( ? x === y : 3 * (x + y));
  if (x === y) {
    return  3 * (x + y);
} else {
    return "Values are not the same"
}
}
     console.log("CrazySum is:", crazySum(x, y));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
let num = 19;
let givenNumber = 21;

const crazyDiff = function (num, givenNumber) {
const difference = givenNumber - num;
    if (givenNumber > 19);{
        return difference * 3;
    }
}
    console.log("Tripled difference between a given number and 19 is:", crazyDiff (num, givenNumber));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */

function boundary(int){
    return (20 < int && int <= 100 || int === 400 ? true : false);
}
console.log (boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

let s;

function strivify(S) {
    const result = 'strive${S}'
    if (S.startsWith("Strive")) {
        return S
    } else {
        return result
    }
}
    console.log(strivify("S"));



/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = function (number){
    if (number % 3 === 0 && number % 7 === 0){
        return "multiple of both"
    } else if (number % 3 === 0){
        return "multiple of 3"
    } else if (number % 7 === 0){
        return "multiple of 7"
    } else {
        return "it is not mutiple of 3 or 7"
    }
}
console.log (check3and7(49));


/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = function (givenString){
    return givenString.split ("").reverse().join("");
}
    console.log(reverseString("John"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
const upperFirst = function (S){
    let words = S.toLowerCase().split(" ");
    for (i=0; i<words.length; i++) {
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words.join(" ");
}
    console.log (upperFirst("first letters of this sentence are capitalized"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = (splitWord) => splitWord.substring(1, splitWord.length-1); //i dont understand meaning of "substring"

console.log(cutString("Stallone"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = (S) => {
    randomArray=[];
    for (let i = 0; i<S; i++) {
        randomArray.push(Math.floor(Math.random()*11));
    }
    return randomArray
}

console.log(giveMeRandom (4));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
