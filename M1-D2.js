/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

/* WRITE YOUR CODE HERE */
console.log (12+20);

/* EXERCISE 2
Create a variable named X containing the number 12
*/  

/* WRITE YOUR CODE HERE */
let X = 12;
    console.log (X);



/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

/* WRITE YOUR CODE HERE */
let name = "John Doe";
    console.log (name);


/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

/* WRITE YOUR CODE HERE */
console.log (12-X);


/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

/* WRITE YOUR CODE HERE */
var name1;
var name2;
name1="john";
name2="John";

console.log (name1 !== name2);
console.log (name1 == name2.toLowerCase());
console.log (somet)




/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

/* WRITE YOUR CODE HERE */

let Y = 7;
function numtoliteral (n) {
if (n == 0) { 
    return "zero";
} else if (n == 1) {
    return "one";
}
if (n == 2) {
    return "two";
}
if (n == 3) {
    return "tree";
}
if (n == 4) {
    return "four";
}
if (n == 5) {
    return "five";
}
if (n == 6) {
    return "six";
}
if (n == 7) {
    return "seven";
}
if (n == 8) {
    return "eight";
}
if (n == 9) {
    return "nine";
}
{
    return "unsupported value"
}
}
console.log (numtoliteral(Y));


/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/

/* WRITE YOUR CODE HERE */
/*let hour = 18;

if (hour >= 6 && hour <12) {
    console.log ("Good morning");
}
else if (hour >= 12 && hour < 18) {
    console.log ("Good afternoon");
}
else {
    console.log ("Good evening");
}
*/

let y;

y = (x === 3 ? 105 : "anything else");

if (x === 3) {
    y = 105;
} else {
    y = "anything else"
}

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
