console.log("start")

setTimeout(function cb(){

    console.log("CallBack")
},0)

console.log("End")


// million lines of code,    So write while loop, that runs for 10 seconds.

let startDate = new Date()
let endDate = startDate
while(endDate < startDate + 10000000000) {//it wait and runs 10000 miliseconds to expire,
    endDate = new Date().getTime()
}


console.log("End of program : while expires")