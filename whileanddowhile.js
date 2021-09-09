// boolean variable
// if test is false, loop never runs
let test = true

// variable to serve as a counter
let count = 0

// create the loop
while (test) {
    if (count == 3) {
        test = false
        break;
    }
    console.log("The count is " + count)
    count++
}

count = 0

// create the loop runs at least once
do {
    if (count == 3) {
        test = false
        break;
    }
    console.log("The count is " + count)
    count++
} while (test) 

