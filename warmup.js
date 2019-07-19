// Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".
// Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
// Hint: console.log(process.argv) as a starting point if you are completely lost.

console.log(process.argv);

// var arg1 = Number(process.argv[2])
// var arg2 = Number(process.argv[3])

// console.log(arg1 + arg2)

var arg1 = process.argv[2]
var arg2 = process.argv[3]
if(arg1===arg2) {
    console.log(true)
}
else {
    console.log(false)
}

console.log(arg1%7===0&&arg2%7===0);

// // Take in an input value in the form of an integer
// var inputNum = parseInt(process.argv[2]);
// var sum = 0;

// // Go from 6 to the number. Adding up 6 each time (to only get multiples of 6).
// for (var i = 7; i <= inputNum; i += 7) {

//   // Each time add i to the sum. (ex: 6, 12, 18, etc.)
// //   sum += i;
// if
// }

// // Print out the sum
// console.log(sum);