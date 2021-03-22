

var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function(num) {
    return num > 0;
})

console.log("Array numbers :",numbers);