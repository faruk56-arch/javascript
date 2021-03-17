

function multiply(number) {
    
    var myNumber = 10;
    var result;


    if (number === " ") {
        console.log("erreur");

    } else if (isNaN(number)) {
        console.log("erreur");

    } else {

        for (var i = 1; i <= myNumber; i++) {
            result = number * i;
            console.log(" " + number + "*" + i + "=" + result);

        }
    }

}

// multiply(process.argv[2]);



var {multiply,addition} = require("../calculater/table-utils.js");

multiply(process.argv[2]);
addition(process.argv[2]);