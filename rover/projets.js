var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];


const rover = {
    direction: "1",
     x: 0,
     y: 0
}



// funtion turnLeft
function turnLeft(rover) {
    if(rover.direction === "N") {
        rover.direction = "E"
        return rover;
    } else if(rover.direction === "E") {
        rover.direction = "S"
        return rover;

    } else if(rover.direction === "S") {
        rover.direction = "W"
        return rover;
    } else {
        rover.direction = "N"
        return rover;
    }

}



// function tornRight
function turnRight(rover) { 
    
    if(rover.direction === "N") {
        rover.direction = "W"
        return rover.direction;
    } else if(rover.direction === "W") {
        rover.direction = "S"
        return rover.direction;

    } else if(rover.direction === "S") {
        rover.direction = "E"
        return rover.direction;
    } else {
        rover.direction = "N"
        return rover.direction;
    }
    
}
console.log(turnRight(rover));
// console.log(rover);


 



// movement du rover

function moveForward(rover) {
if(rover === "N" && turnRight === "W")  {
    rover.direction = "W";
    console.log(rover); 
    rover.x = 1;
    console.log(rover);
    // return rover;
    

}


}
moveForward(rover);