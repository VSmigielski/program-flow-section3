// create a variable to hold temperature
let temp = 21

if (temp > 28) {
    console.log("Hot")
} else if ((temp >= 28) && (temp > 23)) {
    console.log("Not So Hot")
} else if ((temp >= 22) && temp > 19) {
    console.log("Moderate")
} else if ((temp >= 18) && temp > 13) {
    console.log("Cool")
} else {
    console.log("Cold")
}
