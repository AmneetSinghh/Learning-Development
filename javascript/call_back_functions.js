/* What is a Callback Functino in J.S */
// Take a function pass into another function, the func which you passsed
// is known as the callback function.

// Due to callbacks we can do async things in J.S

// the function which you passed inside settimeout is a callback function.
// it means function will be called sometime else in a program.
setTimeout(function(){
    console.log("setimeout function called")
},5000)
// when js runs: Settime will take the func store in a separate space, and attach the timer to it.
// js doesn't wait for settimeout,
function x(y){
    console.log("X called")
    y()
}

x(function y(){
    console.log("Y called")
})

/* J.S is a synchronous and singnle-threaded language */
// one thing at a time in a specific order.



/* Blocking the main thread */

// the operations which are time tkain gin js, do it asynchornly, so that
//main thread is not blocked, means call stack will always be open for new functions be execute.



/* Power of Callbacks */
// because of callbacks we can do async operatoins, take an example of settimneout.






/* Deep about Event Listeners */

// let count = 0
// document.getElementById("clickMe")
// .addEventListener("click",function clicked(){   // callback function.
//     console.log("Button clicked", ++count)
// })


/*


*/
// now a callback funtion forming a closure with its outer scope, count variabnle.
// so it remembers the palce where this count is present in the code, so it takes a reference
// as we know.
function attachEventListener(){
    let count = 0
    document.getElementById("clickMe")
    .addEventListener("click",function clicked(){   // callback function.
        console.log("Button clicked", ++count)
    })
}

attachEventListener()


/* Scope Demo with Event Listeners */




/* Garbage Collection * removeEventListeners */

// Event listeners are heavy, it takes memory. whenever you create event
// listeners it creates a closure so heavy memory consumption.
// So when you have lots of event listeners in your code, it will consume lots of memory
// callbacks with scope attached so sometimes page loads slow.
// thats why we remove event listeners.