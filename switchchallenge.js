// create a variable to hold a grade
let grade = 88

switch(true) {
    case (grade >= 90) && (grade <= 100): 
        console.log("The grade is A")
    break
    case (grade >= 80) && (grade < 90):
        console.log("The grade is B")
    break
    case (grade >= 70) && (grade < 80):
        console.log("The grade is C")
    break
    case (grade >= 60) && (grade < 70):
        console.log("The grade is D")
    break
    case (grade <= 59):
        console.log("The grade is F")
    break
    default: 
        console.log("The grade is not valid.")
}