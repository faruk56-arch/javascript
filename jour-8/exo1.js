

var request = require("request");
// var countriesNames = [];

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
    
    var getCountries = JSON.parse(body) ;


    var resultat = getCountries.map(
        function (elem) {
            return elem.name
        

        }
    );
    
    var result1 = resultat.join(" - ")

    
    console.log(result1);
});




