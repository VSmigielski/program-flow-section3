let sum = 0

for (let i = 1; i <= 10; i++) {
    let product = i * 5
    sum += product
    console.log("The product of " + i + " and 5 is " + product)
}

console.log("The grand total of the products is " + sum)

sum = 0

for (let i = 1; i <= 10; i++) {
    if ((i == 4) || i == 7) {
        continue
    } 
    let product = i * 5
    sum += product
    console.log("The product of " + i + " and 5 is " + product)
}

console.log("The grand total of the products is " + sum)