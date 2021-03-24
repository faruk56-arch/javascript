var request = require("request");

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {


var name = JSON.parse(body);
console.log(name);


    
    
});
