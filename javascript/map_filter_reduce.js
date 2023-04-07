/*       Map     */
const arr = [4,2,5,2,1]

function double(x){
    return x**2
}


var output = arr.map(double)


// perfectly valid syntax. if there is one line.
var output = arr.map((x)=> x.toString(2))
console.log(output)



/*       Filter     */

function isOdd(x){
    return x%2
}
var output = arr.filter(isOdd)
console.log(output)



/*       Reduce   : You will take the whole array and comes with a single value output based on some condition  */


// find sum of all vlaues using reducer.
// current represent values of array
// acculator means : Accumulate the result, or collect the result.
var output = arr.reduce(function(accumulator, currentValue){
    accumulator = accumulator + currentValue
    return accumulator
},0)// second argument of the reduce func is initial value of acculator 
console.log(output)


// find max using reducer

var output = arr.reduce(function(accumulator, currentValue){
    if(currentValue>accumulator)return currentValue
    return accumulator
},0)// second argument of the reduce func is initial value of acculator 
console.log(output)



/*           Real world example */
const users = [
    {firstName : "akshay", lastName : "singh", age : 26},
    {firstName : "amneet", lastName : "hero", age : 75},
    {firstName : "aditya", lastName : "aggarwal", age : 50},
    {firstName : "twinkle", lastName : "gupta", age : 26},
]


var output = users.map((user)=> (user.firstName+ user.lastName))
console.log(output)



// how many users of particular age// exmpale output can be {26: 2, 75: 1, 20: 1}



var output = users.reduce(function(result, user){
    if(result[user.age]){
        result[user.age] ++
    }
    else{
        result[user.age]=1
    }
    return result
},{})
console.log(output)

// If you have an array and you have to come into single value output, user REDUCE
// if you have an array and you have to filter some values then user FILTER
// if you have an array and you have to apply something to each value use MAP



// we can chain map, filter and reduce.

// give list of all these firstNames which have age less than 30.


var output = users.filter((x)=> x.age < 30).map((x)=> x.firstName)
console.log(output)


// same thing we can do with reduce as well.
var output = users.reduce(function(acc,user){
    if(user.age<30)acc.push(user.firstName)
    return acc
},[])
console.log(output)