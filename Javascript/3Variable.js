/* 
   variables
   let - jya scope madhe declare kela tyach scope madhe use krta yeto, value change karu shakto.

*/
// let msg ; declaration
// msg = "Hey, How are you?" assignment
//or
let msg = "Hey, How are you?"//declaration + assignment
//document.write(msg);
console.log(msg);
 let a = 20, b=30 , c= 50
 console.log(a + "," + b + "," + c)//for console - ctrl+shift+i

 msg = "Hey i am fine"
 console.log(msg);

 //creating constants
 const user = "sam"
 console.log(user)
 
 if(5>2){
    console.log("Inside block")
    let address = "Pune"
    console.log(address)
    var city = "Delhi"
    console.log(city)
 }

 //console.log(address) // Error - we cant access it outside if block beacause its scope is inside the if block only
 console.log(city)
 //var : global or function scope . var has not block scope
 //we can redeclare var meanwhile let will give error
 var x = 49
 var x = 89
 console.log(x)
 //var variables can be declared below their use
 z = 92
 console.log("value of z is " , z)
 var z;
 let student = {
   name : "Sam",
   address : "Pune",
   phone : "238729482"
};
// console.log(student)
// console.log(student.name);
console.table(student);