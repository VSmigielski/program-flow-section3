// create a for loop
// i is short for iterator/iterates
// Incrementing for loop
/* for (let i = 0; i <= 5; i++) {
    console.log("This is loop # " + (i + 1))
} */

// Decrementing for loop
/* for (let i = 5; i >= 1; i--) {
    console.log("This is loop # " + (i))
} */

// Double for loop
/* for (let i = 1; i <= 5; i++) {
    for (let i = 1; i <= 3; i++) {
        console.log("The inner loop has run " + i + " times")
    }
    console.log("The outer loop has run " + i + " times")
} */

// skips loop 3
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue
    }
    console.log("This is loop # " + i)
}

for (let i = 0; i < 5; i++) {
    let test = 0
    test++
    console.log(test)
}