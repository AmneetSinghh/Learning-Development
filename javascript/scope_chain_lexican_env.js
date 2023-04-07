function gb(){
   a()
function a(){
    var b = 10
    c()
    function c(){
        var omg = 11
        d()
        function d(){
            e()
            function e(){
                console.log(this.a)// how this A is accessable.
                console.log(b)
                console.log(omg)
            }
        }
    }
}
}

// a()
gb()


// Learn in detail, what are the things that are present in scope.
// while learning closures.