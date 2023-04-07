var x = 1
a()
b()
console.log("Global x -> ", x)

function a(){
    var x = 10
    console.log("function A-x -> ", x)
/*
When we console x above, First JS engine will look the value of x in local memory scope,
means very much limited to that much execution context. This function execution context.
*/
}

function b(){
    var x = 100
    console.log("function B-x -> ", x)
    
}


/*
When we print some variable for looking the value, engine will do bottom up appraoch
local space -> local space 2 -> global space


function a(){
    x = 1// global space
    function(){// local space 2 
        functino(c){  // local space
            console.log(x)
        }
    }
}

*/
// Execution context is running separately, they have their own virtual environment.
// Execution context are Independent of each other.