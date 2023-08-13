// Button Color for sequence
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Patern of colors that the user has clicked
var userClickedPattern = []
var gamePattern = []

// Click event function to play sound when button is clicked
$(".btn").click(function(e){

    var userChosenCoulour = e.target.id // Grab the id of the chosen color
    userClickedPattern.push(userChosenCoulour); // Add the id of the chosen color to the userClickedPattern array

    playSound(userChosenCoulour)
    console.log(userClickedPattern)
})

// Function that generates number from 0 to 3
function nextSequence(){
    var randomNumber = Math.round(Math.random()*3); // Generates a random number from 0 to 3
    var randomChosenCoulour = buttonColours[randomNumber]; // Randomly chooses a color from the buttonCoulours array
    gamePattern.push(randomChosenColour); // Adds the random chosen color to the gamePattern array

    $('#'+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenCoulour);
}

// Function that plays the sound of the button when clicked
function playSound(name){
    var audio = new Audio('/sounds/' + name + '.mp3');
    audio.play() //Play the appropriate audio of the button that was clicked
}