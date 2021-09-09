// Declare a boolean variable
let test = true

// Declare a num variable
let num = 50

// if structure
if (test) {
    // between opening & closing braces is a block
    console.log('The condition is true')
} else {
    console.log("The condition is false")
}

// if structure
// The first statement that is true will execute
// Any others that are true after the first one will not
if (num > 75) {
    // between opening & closing braces is a block
    console.log('The number is greater than 75')
} else if (num < 35) {
    console.log("The number is less than 35")
} else if (num == 50) {
    console.log("The number is 50")
} else if (num > 45) {
    console.log("The number is greater than 45")
} else {
    console.log("The number is less than 75")
}

// after the if structure
console.log("This is the code after the if structure")

// Or and And operators
// OR || 
// AND &&

// Create two numeric variables
let number1 = 50
let number2 = 25

// if structure
if ((number1 > 45) || (number2 < 25)) {
    console.log("One of the conditions is true")
} else {
    console.log("None of the conditions are true")
}

// if structure
if ((number1 > 45) && (number2 < 25)) {
    console.log("Both of the conditions are true")
} else {
    console.log("Neither of the conditions are true")
}