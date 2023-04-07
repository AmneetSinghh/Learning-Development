// Good and Bad parts of Callbacks.

// Async code and callback funcs are the main thing in async codes.
setTimeout(function (){
    console.log("javascript")
},5000)

// advantage of callbacks:
// we are able to write good asynn code.

const cart = ["shoes","pants","kurtas"];
/*
Run in sequence.

a. create order
b. proceed payment
c. order summary
d. Update wallet
*/

    api.createOrder(cart,function(){

        api.proceedToPayment(function(){

            api.showOrderSummary(function(){

                api.updateWallet()
            })
        })
    })

// This is the first callback problem.

/*
When we have a large codebase and lots of dependent api's then we are ending up 
falling into callback hell, so callback hell is callback under callback....
code is not maintainable.
*/


/* Inversion of Control : Problem of callbacks. */



/*
1. Importance of callbacks (async programming in js exists because callbacks exists.)
2. issues with callbacks 
    a. callback hell (lot of nested callbacks)
    b. Inversion of control.
*/

