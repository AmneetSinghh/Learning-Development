/* 
What is higher order functions? 

sol : A func which takes a  another func as arguemnt or returns a func
called a higher order func.

*/

function x(){
    console.log("x")
}

function y(x){
    x();
}
y(x);// X is the callback function here.



const radius = [3,1,2,4]
const calculatedArea = function (radius){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}
console.log(calculatedArea(radius))


// In above program we calculated area, What if we have to calculate circumferences?


const calculateCirumference = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(2* Math.PI * radius[i])
    }
    return output
}
console.log(calculateCirumference(radius))


// What if we have to calculate diameter.

const calculateDiameter = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(2* radius[i])
    }
    return output
}
console.log(calculateDiameter(radius))


// Do you see problem here?
/*
1. We are just copy pasting the code
3. We are not following DRY principle. (Don't repeat yourself.)
4. All functions are 90% same, just change is logic part. 
*/





// We will write generic functions.
// Lets write modular code here.
const areaOfcicle = function (radius){
    return Math.PI* radius * radius
}
const areaOfrectangle = function (radius){
    return Math.PI* 2
}


// this below logic could be calculate anythnig, ex : area, circumference, diameter, cylender. etc.

const calculate = function (radius,logic){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,areaOfcicle))
console.log(calculate(radius,areaOfrectangle))
console.log(radius.map(areaOfrectangle))// output same as before.


/*

1. We used SOLID principles, (open closed, dry)
2. Try to write Higher order functions in the interview.
3. Think logic in terms of small reusable functions.
4. calculate function similar to map higher order function.

*/


// if we use Array.prototype.


Array.prototype.calculate = function (logic){
    const output = []
    for(let i =0; i<this.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}
// This above function will be present for all arrays.
console.log(radius.calculate(areaOfcicle))

// similar to map higher order function, just need to change name to map.
// beauty of javascript.