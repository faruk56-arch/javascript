

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




function addition (number) {
    var myNumber = 10;
    var result;


    if (number === " ") {
        console.log("erreur");

    } else if (isNaN(number)) {
        console.log("erreur");

    } else {

        for (var i = 1; i <= myNumber; i++) {
            result = number + i;
            console.log(" " + number + "+" + i + "=" + result);

        }
    }

}


module.exports = {
    multiply,addition

}

