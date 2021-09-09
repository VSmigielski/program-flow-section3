// set two new variables
let num1 = 17
let num2 = 3
let num3 = 2

// Modulus, return the remainder
console.log(num1 % num2)

function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is even")
    } else {
        console.log(num + " is odd")
    }
}

function evenOrOdd (num) {
    if (num % 2 !== 0) {
        console.log(num + " is odd")
    } else {
        console.log(num + " is even")
    }
}

oddOrEven(num1)
oddOrEven(num2)
oddOrEven(num3)

evenOrOdd(num1)
evenOrOdd(num2)
evenOrOdd(num3)

// Set a variable
let num4 = 15
let num5 = 15

// The below code is the same as line 38
// num4 = num4 + 1
num4++ // increment operator

num5-- // decrement operator

console.log(num4)
console.log(num5)

// post incrementor
// doesn't update here, updates in the next one
console.log(num4++)
console.log(num4)

// pre-incrementor, updates in the same line
console.log(++num5)

// add 5
num4 = num4 + 5
console.log(num4)

// addition assignment operator
num4 += 5
num5 += 1
console.log(num4)
console.log(num5)

// subtraction assignment operator
num5 -= 5
console.log(num5)

// multiplication assignment operator
num5 *= 5
console.log(num5)

// division assignment operator
num5 /= 5
console.log(num5)

// modulus assignment operator
num5 %= 5
console.log(num5)

// ternary operator   condition ? true : false
let howLarge = (num4 >= 10) ? "The number is larger than 10" : "The number is smaller than 10"

console.log(howLarge)