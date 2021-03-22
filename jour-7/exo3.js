var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]


var shortNames = longNames.map(

    function (elem) {
        // console.log(elem);
        return {
            name: elem.firstName + " " + elem.lastName
            
        },
        {
            name: elem.firstName + " " + elem.lastName
        }
        


    }

)

console.log(shortNames);