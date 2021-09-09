// create variable to hold number
let num1 = 3

// switch structure
switch(num1) {
    case 1: 
        console.log("The number is 1")
    break;
    case 2: 
        console.log("The number is 2")
    break;
    case 3: 
        console.log("The number is 3")
    break;
    case 4: 
        console.log("The number is 4")
    break;
    default: 
        console.log("num has a value not covered by the switch structure")
}

// create variable to hold number
let num2 = 5

// switch structure
switch(num2) {
    case 1: 
        console.log("The number is 1")
    break;
    case 2: 
        console.log("The number is 2")
    break;
    case 3: 
        console.log("The number is 3")
    break;
    case 4: 
        console.log("The number is 4")
    break;
    default: 
        console.log("num has a value not covered by the switch structure")
}

// create variable to hold number
let num3 = 2

// switch structure w/o break the number falls through
switch(true) {
    case num3 == 1: 
        console.log("The number is 1")
    break;
    case num3 == 2: 
        console.log("The number is 2")
    break;
    case num3 == 3: 
        console.log("The number is 3")
    break;
    case num3 == 4: 
        console.log("The number is 4")
    break;
    case num3 > 40:
        console.log("The number is greater than 40")
    break;
    default: 
        console.log("num has a value not covered by the switch structure")
}