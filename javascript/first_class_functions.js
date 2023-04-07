/* Function Statement/ Function Declaration */
a()
function a(){
    console.log(" A called")
}


// This way of making a function is called a function statement


/* Function Expression  */

var b = function(){
    console.log("B called")
}
b()
// Function acts like a value
// This way of making a function called a function expression
/* Difference b/t a function statement and function expression.*/

// The major difference is hoisting.

/*  Anonymous Function  */
// function () {

// }
// Anynomous functions are used, when they need to assign it to some value
var b = function(){}


/* Named Function Expression */

var b = function namedFunctionExpression(){
    console.log(namedFunctionExpression)
    // you can access namedFunctionExpression here but not outside,
    // because it treats like a local variable.
}

b()
//namedFunctionExpression()// don't work




/* Difference Between parameters & Arguments ? */

var b = function(param1, param2,s){
    // param1 and param2 are the local variables of this function, you can't access from outside.
    console.log("called-> ", param1,param2,s)
}
b(12,12)// this is the arguments.
b(12,12,5,12,)// this will work, no error.


/* First class Functions */

/* The ability to use funciotn as the values, to pass the function  as a
argument, to return the function inside the funciton is called the 
First class functions */

var b = function (param1){
    console.log("Argumented function: ", param1)
    return function(){
        
    }
}

// Functions are first class citizens same as first class functions.

function random(){

}
console.log("Returned function", b(random))

// Function are treated as values in J.S



/* Arrow functions */

// All these things, function statements, expressions, first class funciotns
// can be created using the arrow functions.