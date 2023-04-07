function x(){
    var i = 1
    setTimeout(function(){
        console.log(i)
    },1000)
    // setTimeOut waits for none.

    // The function which passed in setTimeout                   forms a closure, it takes the 
    // reference of i, and forms a closure, where this funtion goes, it take 
    // the reference of i with it.
    console.log("Amneet Sigh")// it is printed before of setTimeout
}

/* So setTimeOut, just save that callback function into somewhere and attaches
the timer with it*/
x()



// let variables are block scope.