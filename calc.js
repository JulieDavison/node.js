var operator = process.argv[2];

var operand1 = Number(process.argv[3]);
var operand2 = Number(process.argv[4]);

var answer;

// if (operator === "add") {
//     answer = operand1 + operand2;
// }
// else if (operator === "subtract") {
//     answer = operand1 - operand2;
// }
// else if (operator === "multiply") {
//     answer = operand1 * operand2;
// }
// else if (operator === "divide") {
//     answer = operand1 / operand2;
// }
// else if (operator === "remainder") {
//     answer = operand1 % operand2;
// }

// console.log(answer);


switch (operator) {
    case 'add':
        answer = operand1 + operand2;
        break;
    case 'subtract':
        answer = operand1 - operand2;
        break;
    case 'multiply':
        answer = operand1 * operand2;
        break;
    case 'divide':
        answer = operand1 / operand2;
        break;
    case 'divide':
        answer = operand1 / operand2;
        break;

    default:
        console.log(answer);
}