console.log(process.argv);

var arg1 = Number(process.argv[2])
var arg2 = Number(process.argv[3])

console.log(arg1 + arg2)

var arg1 = process.argv[2]
var arg2 = process.argv[3]
if(arg1===arg2) {
    console.log(true)
}
else {
    console.log(false)
}

console.log(arg1===arg2)


