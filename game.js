// Button Color for sequence
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Patern of colors that the user has clicked
var userClickedPattern = []
var gamePattern = []

// To track whether the game has started or not
var started = false

var level = 0

// If key is pressed, start game sequence
$(document).keydown(function(){
    if(!started){
        $('#level-title').text('Level ' + level)
        nextSequence();
        started = true;
    }
});

// Click event function to play sound when button is clicked
$(".btn").click(function(e){

    var userChosenCoulour = e.target.id // Grab the id of the chosen color
    userClickedPattern.push(userChosenCoulour); // Add the id of the chosen color to the userClickedPattern array

    playSound(userChosenCoulour);
    animatePress(userChosenCoulour);

    var userClickedPatternIndex = userClickedPattern.length - 1;
    console.log(userClickedPatternIndex);/////////////////////////
    checkAnswer(userClickedPatternIndex);
    
})


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                nextSequence();
            }, 1000)

        }
    } else {
        console.log('wrong');
    }
}

// Function that generates number from 0 to 3
function nextSequence(){

    // Everytime nextSequence() is invoked, level increments by 1 
    level++;

    // Displays the current level
    $('#level-title').text('Level ' + level)

    var randomNumber = Math.round(Math.random()*3); // Generates a random number from 0 to 3
    var randomChosenCoulour = buttonColours[randomNumber]; // Randomly chooses a color from the buttonCoulours array
    gamePattern.push(randomChosenColour); // Adds the random chosen color to the gamePattern array

    $('#'+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    

    playSound(randomChosenCoulour);
    animatePress(randomChosenCoulour)
}

// Function that plays the sound of the button when clicked
function playSound(name){
    var audio = new Audio('/sounds/' + name + '.mp3');
    audio.play() //Play the appropriate audio of the button that was clicked
}

// Function to animate button when pressed
// Used setTimeout to delay the animation
function animatePress(currentColour){
    $('#' + currentColour).addClass('pressed');
    setTimeout(function(){
        $('#' + currentColour).removeClass('pressed');
    }, 100)
}