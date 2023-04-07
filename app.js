// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// let num1 = +prompt("Enter First Number")
// let num2 = +prompt("Enter First Number")

// if (num1 > num2) {
//     document.write(num1 + " is Greater than " + num2)
// } else if (num2 > num1) {

//     document.write(num2 + " is Greater than " + num1)
// }
// else if (num1 == 0 && num2 == 0) {
//     document.write("Both Numbers Are zero ")

// }
// else if (num1 == num2) {
//     document.write(num1 + " is Equal to " + num2)

// } else {

//     document.write("Invalid")
// }



// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


// let inp = +prompt("Enter Number to check it's negative or positive")
// if (inp < 0) {
//     document.write("The sign is -")
// } else if (inp > 0) {

//     document.write("The sign is +")
// } else {

//     document.write("Invalid")
// }



// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


// let n1 = +prompt("Enter First Number")
// let n2 = +prompt("Enter second Number")
// let n3 = +prompt("Enter third Number")
// let n4 = +prompt("Enter fourth Number")
// let n5 = +prompt("Enter fifth Number")

// if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
//     document.write(n1 + " is greater than" + " " + n2 + " " + n3 + " " + n4 + " " + n5)
// }
// else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
//     document.write(n2 + " is greater than" + " " + n1 + " " + n3 + " " + n4 + " " + n5)
// }
// else if (n3 > n2 && n3 > n1 && n3 > n4 && n3 > n5) {
//     document.write(n3 + " is greater than" + " " + n2 + " " + n1 + " " + n4 + " " + n5)
// }
// else if (n5 > n2 && n5 > n3 && n5 > n4 && n5 > n1) {
//     document.write(n5 + " is greater than" + " " + n2 + " " + n3 + " " + n4 + " " + n1)
// }
// else if (n1 == 0 && n2 == 0 && n3 == 0 && n4 == 0 && n5 == 0) {
//     document.write("All Numbers Are Zero" + " " + n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5)
// }
// else if (n5 == n2 && n5 == n3 && n5 == n4 && n5 == n1) {
//     document.write(" All are Equal" + " " + n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5)
// }
//  else {
//     document.write("Invalid")
// }



// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         document.write(i + " is even" + "<br>")
//     } else {
//         document.write(i + " is odd" + "<br>")
//     }
// }


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.


// let maths = +prompt("ENTER MARKS OUT OF 100")
// let chem = +prompt("ENTER MARKS OUT OF 100")
// let comp = +prompt("ENTER MARKS OUT OF 100")
// let eng = +prompt("ENTER MARKS OUT OF 100")

// let total = maths + chem + comp + eng
// let avg = total / 4
// console.log(avg)
// if (avg > 100) {
//     document.write("INVALID")
// }
// else if (avg >= 100) {
//     document.write("A")
// }
// else if (avg >= 90) {
//     document.write("B")
// }
// else if (avg >= 80) {
//     document.write("C")
// }
// else if (avg >= 70) {
//     document.write("D")
// }
//  else {
//     document.write("F")
// }


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         document.write( " FizzBuzz" + "<br>")
//     }
//     else if (i % 3 == 0) {
//         document.write( " Fizz" + "<br>")
//     } else if (i % 5 == 0) {
//         document.write(" Buzz" + "<br>")
//     }
// }


// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// for (let j = 0; j <= 5; j++) {
//     for (let i = 0; i <= j; i++) {
//         document.write(" * ")
//     }
//     document.write("<br>")
// }
