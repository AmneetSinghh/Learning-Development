// // let a= 10

// // if(true){
// //     let a = 100
// //     console.log(a)
// // }

// // What is block.  combine multiple statements into one grup
// // What is block scope : What are bariables and functions thta we can access under block
// // how hoising works in block.
// // shadowing.

// // shadowing concept not only for block it can be in functions, 
//when we make varaibles with same name. it shadows.

// let b  = 10
// var a = 100
// {
//     var a = 10// this a shadows a that is in global scope.
//     let b = 20// this b again shadows. but doesn't change.
//     const c = 30
// console.log(b)

// }

// console.log(a)
// console.log(b)

// // 3 types of scopes, block , script and global.





/// illegal shadowing:

// let a = 20
// {
//     var a = 20// this is 
// }

// If variables is shadowing somehting it shouldn't cross the boundary of scope.
// let cann't be redeclared, so var shouldn't cross the let boundary.

// // valid 

// // Why?
// var a = 20
// {
//     let a = 20// this is 
// }

// var is function scoped.




// let a  =20
// function x(){
//     var  a = 20
//     // valid, because a is function scoped. a new execution context created.
// }



// let a =10
// {

//     var a= 100// var is crossing boundary, because it is functino scoped.
//     console.log(a)
// }
// console.log(a)



// let a =10
// function x (){

//     var a= 100// var is crossing boundary, because it is functino scoped.
//     console.log(a)
// }



// block also follows : lexical scope chain pattern

// const a = 20
// {
//     const a = 100
//     {
//         const a = 200
//         console.log(a)
//     }
// }



// let a = 10
//  {// var is function scope, but var is not block scope, so thats why var is crossing boundary.
//     var a = 10
//     /// var should not cross the boundary over here. 
// }





// {
//     var a = 10
// }
// console.log(a)

