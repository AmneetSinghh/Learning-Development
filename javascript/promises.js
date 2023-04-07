const cart = ["shoes","pants","kurta"];

createOrder(cart)// returns orderId

proceedToPayment(orderId)// proceed to payment page.

// These are 2 async api's, we don't know how much time it will take


// How to write using callbacks?

createOrder(cart,function(orderId){
    proceedToPayment(orderId)
})

/* The issue is inversion of control.
We have given the responsibility of the proceedToPayment code to createOrderApi.
it's not in our hands.       This RISKY.

We are giving control of our program to another service lets say createOrderServicem,
which code's we are not aware of.
*/


/*   Promise */


const promise = createOrder(cart);

// {data : undefined}  this happens til the time, api's data not returned.
// after data returned {data: api_returned_data} will automatically fills.



// now contorl is our hands.
promise.then(function (orderId){
    // as soon as the 28th line data returns, this 36 line execute, that is the 
    // gurrented which promise gives.
    proceedToPayment(orderId)
})



/*       Exmaple using fetch.,   */

// const user = fetch("https://randomuser.me/api/")// fetch bydefault returns promise.
// console.log(user)



// user.then(function(data){
//     data.type = ""
//     // Promise return immutable data, you can't change the data.
//     // So you can pass it to anywhere.
//     console.log("data: ",data.type)
// })



// Issue of callback hell  : Ugly code and not maintanable.
// it solves that issue.


/* Promise chaining */
// In promise chaining we returns the data.
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
})

// In promise we are not passing a functin into another func like callback
// we are attaching a callback func to a promise object.