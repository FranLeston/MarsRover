// Rover Object Goes Here.    
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travellog: [0,0],
};

var instructions = "rffrfflfrffz"; //added z at the end just to give error

// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is currently facing West");
      break;

    case "W":
      rover.direction = "S";
      console.log("Rover is currently facing South");
      break;

    case "S":
      rover.direction = "E";
      console.log("Rover is currently facing East");
      break;

    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North");

  }

}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is facing East");
      break;

    case "W":
      rover.direction = "N";
      console.log("rover is facing North");
      break;

    case "S":
      rover.direction = "W";
      console.log("Rover is facing facing West");
      break;

    case "E":
      rover.direction = "S";
      console.log("Rover is facing South");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  if (rover.direction == "W") {
    rover.x -= 1;
    rover.travellog.push([rover.x, rover.y]);
  } else if (rover.direction == "N") {
    rover.y -= 1;
    rover.travellog.push([rover.x, rover.y]);
  } else if (rover.direction == "S") {
    rover.y += 1;
    rover.travellog.push([rover.x, rover.y]);
  } else if (rover.direction == "E") {
    rover.x += 1;
    rover.travellog.push([rover.x, rover.y]);
  } else  {
    console.log("Houston! We have a problem."); //Only to catch an error
  }
  
  
}

for (var i = 0; i < instructions.length; i++) {
  var inputLetter = instructions.charAt(i);
  if (inputLetter == "r") {
    turnRight(rover);
  } else if (inputLetter == "f") {
    moveForward(rover);
  } else if (inputLetter == "l") {
    turnLeft(rover);
  } else {
    console.log("Houston! We have a problem."); //To catch error in last commands string
  }
  console.log("The Rover's current position is: [" + rover.x + "," + rover.y + "]");
}

console.log(rover.travellog);
