// Patern of colors that the user has clicked
var userClickedPattern = []

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

gamePattern.push(randomChosenColour);

console.log(gamePattern)

$('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

var audio = new Audio('/sounds/' + randomChosenColour + '.mp3');
// audio.play();

$(document).on('click', function(e){
    var userChosenCoulour = e.target.id // Grab the id of the chosen color
    userClickedPattern.push(userChosenCoulour); // Add the id of the chosen color to the userClickedPattern array
    console.log(userClickedPattern)
})

