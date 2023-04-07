/* Example of Closure */
function outest(){
    var c = 20
    function outer(b){
        function inner(){   
                                 // it has access to his outer env.
            console.log(a,b,c)
        }
        let a = 10
        return inner
    }
    return outer
}


let a = 100
outest()("Hello world")()///  it will call inner function.



/* Closure in data hiding & encapsulation */
function counter(){
    var count = 0
    return function incrementCounter(){
        count++
        console.log(count)
    }
}

var counter1 = counter()
counter1()
counter1()
// counter2 makes a separate scope, so new counter, starts with 1
// You can see, global scope can't have access to count, is hide inside function
var counter2 = counter()
counter2()
counter2()



console.log("Function constructors ************** ")
/* Is code is scalable?   What if we can have a decrement counter */
// Function constructors : Do read about it.

function Counter(){
    var count = 0
    this.incrementCounter = function(){
        count ++
        console.log(count)
    }
    this.decrementCounter = function(){
        --count
        console.log(count)
    }
}
var counter1 = new Counter()// new keyword will make new object for you.
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()
counter1.decrementCounter()

// ways to make constructor : https://www.codecademy.com/resources/docs/javascript/constructors



/* Disadvantages of Closure */
/*
-   Closures consumes a lot of memory, so overconsumption of memory is there.
    Because the variables under closures are garbage collected only when the program
    expires. So it can lead to memory leaks or browser freeze

-   Garbage Collector : In high level programing languages, example js
    js engine do the work, if their is some vairbales who is unused, the garbage
    collector will frees up the space.

-   How closures and garbage collecters are related?
*/

function a(){
    var x = 0
    return function b(){
        console.log(x)
    }
}

var y = a()
///...
/* As you can see, if x is not used anywhere in the inner functions then
x will be garbage collected. but x is used in some inner functions, so x
will not free up space. 
*/


/* Smart garbage collector in chrome v8 engine */
function a(){
    var x = 0, z = 10
    return function b(){
        console.log(x)
    }
}

var y = a()
///...

// Z is garbage collected in above case. because its not used in somewhere
// inner function, You can also check on the browser. 