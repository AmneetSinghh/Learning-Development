const cart = ["shoes","pants","kurta"];

  

createOrder(cart) // orderId async operation  and returns a promise.
// consumer part.


// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet
// console.log(promise,"pending promise")
createOrder()
.then(function(orderId){
    console.log("Order is created")
    return orderId
})
.then(function(orderId){
    console.log("Proceed to payment starts orderId :",orderId)
    return proceedToPayment(orderId)// response of proceedToPayment passed to next
})
.catch(function(err){
    console.log("Rejecting above promises  orders and payments")
    return "{ catched result }"
})
.then(function(paymentInfo){
    console.log("Show order summary",paymentInfo)
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    console.log("Updating wallet starts",paymentInfo)
    return updateWallet(paymentInfo)
})
.catch(function(orderId){
    console.log("Rejecting above promises")
})
.then(function(paymentInfo){
    console.log("No matter what happens, it will definately be called",paymentInfo)
})

// catch callback will be called if promise rejects.


// producer promise.
function createOrder(cart){
    const pr = new Promise(function( resolve, reject ){
        // create order
        // validate cart
        // orderId 
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            setTimeout(function(){
                reject(err)
            },100)
        }
        // logic for creating order
        const orderId = "123"
        // resolve teh orderId after 5 seconds.
        setTimeout(function(){
            resolve(orderId)
        },100)
        
    
    })

    return pr
}


function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        reject({message : "payment successful",orderId:orderId})
    })
}

function updateWallet(paymentInfo){
    return new Promise(function(resolve, reject){
        paymentInfo.message = "Wallet is updated"
        resolve(paymentInfo)
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        paymentInfo.message = "order id is changed"
        paymentInfo.orderId = "12345"
        resolve(paymentInfo)
    })
}

function validateCart(){
    return true;
}





