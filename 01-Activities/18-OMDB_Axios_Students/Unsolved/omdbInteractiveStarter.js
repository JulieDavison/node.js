// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...
var axios = require('axios');

console.log(process.argv[2]);
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv.slice(2).join('%20');
// ...


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// const fetchData =  async () => {
//     try {
//         var results =  await axios.get(queryUrl);
//     console.log(results);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// fetchData();

// Then create a request with axios to the queryUrl
// ...
movieName && axios.get(queryUrl)

// If the request with axios is successful
// ...
    .then(function(response) {
        console.log(response.data);
    })
// Then log the Release Year for the movie
// ...
    .catch(function(err){
        console.log(err);
    })


// Example of slice and join
//     var someArray = ['no','no','The', 'Terminator']

// someArray.slice(2).join(' ')