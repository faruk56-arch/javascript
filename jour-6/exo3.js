



function checkProfile() {
    var prompt = require("prompt");


    var properties = [
        {
            name: "username",
            validator: /[a-z0-9-s\-]+$/,

        },
        {
            name: "email",
            validator: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,

        },
        {
            name: "password",
            validator: /[a-zA-Z-9z]/,
            hidden: true
        }


    ];
    prompt.start();

    function onErr(err) {
        console.log(err);
        return 1;
    }

    prompt.get(properties, function (err, res) {
        if (err) {
            return onErr(err);
        }

        console.log("ALL Good");
        console.log("=> Username : " + res.username);
        console.log("=> Password : " + res.password);
    });


}

checkProfile();




