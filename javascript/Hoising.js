
// before code execution we have the memory creation phrase.
// thts why hoiusing exists. we can access the variables and functions.

// getName()
console.log("Before initilizing", x)
var x = 7
console.log("Before initilization", getName)// lot this getname method not invoking.


getName()// in the first phase : in memory creation phase js gives memory to each functions or variables.
// so thats why we call getName() either before or after prototype doesn't matter.
// getName2()// behaves just like a variable.
// getName3()// behaves just like a variable.


console.log(getName2)
function getName(){
    console.log("Amneet javascirpt")// only in this case copy the whole code.
}

var getName2= ()=> {
    console.log("Amneet javascirpt")
}

var getName3= function() {
    console.log("Amneet javascirpt")
}


console.log("After initilizing", x)


// console.log("After initilization", getName)// lot this getname method not invoking.


