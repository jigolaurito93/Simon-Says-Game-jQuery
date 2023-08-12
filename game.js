// Button Color for sequence
var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = []

// Function that generates number from 0 to 3
function nextSequence(){
    var randomNumber = Math.round(Math.random()*3);
    return randomNumber
}

// Randomly chooses a color from the buttonCoulours array
var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour)
console.log(gamePattern); 