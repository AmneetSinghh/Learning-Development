

// closure : function along with its lexical scope forms a closure.
// closures are crearted every time a function is creatred, at function creation time.
// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     return y// we returned this function it no longer part of x, or no longer under x.
// }
// var z = x()// Now we can use Y function outside of x scope, lets see how its behave.
// // console.log(z)
// z()// How Z is printing a? A was under X before.

// X is not there, removed from call stack, but stil y remembners where it comes from
// its lexical scope

// When we returned function, (function with its lexical scope bundle together called closure) as closure is returned.



// // exmaple 
// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     a = 100
//     return y// we returned this function it no longer part of x, or no longer under x.
// }
// var z = x()// Now we can use Y function outside of x scope, lets see how its behave.
// // console.log(z)
// z()// How Z is printing a? A was under X before.

// we are able to change the value of a, -> because in y function, a is attached as reference. not value
// or y stores the memory location of a 




// lets see by adding one more chain.



    function x(){
        var  a = 7
        function cd(){
            console.log(a)
        }
        var inner_function = cd
        function y(){
            console.log(a)
            inner_function()
            console.log("Hey")
        }
       return y
    }
var z = x()
z()



//    Common uses : 
/*
module design pattern
currying
function like once
memoize
maintaining state in async world
setTimeouts
Iterators
and many more....


*/
