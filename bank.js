var fs = require('fs');

var action = process.argv[2];
var value = process.argv[3];

// total
// deposit
// withdraw
// lotto


if (action === "total") {
    total();
}
else if (action === "deposit") {
    deposit();
}
else if (action === "withdraw") {
    withdraw();
}
else if (action === "lotto") {
    lotto();
}

console.log(action);

function total() {
    fs.readFile("bank.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        data = data.split(",");
        var result = 0;

        // Loop through those numbers and add them together to get a sum.
        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {
                result += parseFloat(data[i]);
            }
        }

        // We will then re-display the content as an array for later use.
        console.log(result);
        console.log("You have a total of " + result.toFixed(2));

    });
}