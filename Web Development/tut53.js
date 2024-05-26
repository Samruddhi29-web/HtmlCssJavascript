console.log("This is tutorial no. 53")
function greet(name , greetText = "Greetings from javascript"){
    let name1 = "Name1"
    console.log(greetText + " "+ name)
    console.log(name+ "is a good boy.")
}
function sum(a, b, c){
    let d = a + b + c;
    return d;
}


let name1 = "Harry"
let name2 = "Shubham"
let name3 = "Ram"
let name4 = "Rohan"
let name5 = "Shyam"
let greetText = "Good morning";
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4);
let returnval = sum(1, 3, 6)
console.log(returnval)
// console.log(name1+ " is a good boy.")
// console.log(name2+ " is a good boy.")
// console.log(name3+ " is a good boy.")
// console.log(name4+ " is a good boy.")
// console.log(name5+ " is a good boy.")

