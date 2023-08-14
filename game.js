// Button Color for sequence
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Patern of colors that the user has clicked
var userClickedPattern = []
var gamePattern = []

// To track whether the game has started or not
var started = false

var level = 0

// If key is pressed, start game sequence
$(document).keypress(function(){
    if (!started) {
        $('#level-title').text('Level ' + level);
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
        var wrong = new Audio("/sounds/wrong.mp3")
        wrong.play(); // Plays the error sound when player commits an error
        $('body').addClass('game-over')
        
        //Removes the game-over styling after 200 milliseconds
        setTimeout(function() {
            $('body').removeClass('game-over')
        },200);

        // Change the h1 title to say "Game Over"
        $('h1').text('Game Over, Press Any Key to Restart');

        startOver();
    }
}

// Function that generates number from 0 to 3
function nextSequence() {

    userClickedPattern = [];

    // Everytime nextSequence() is invoked, level increments by 1 
    level++;

    // Displays the current level
    $('#level-title').text('Level ' + level)

    var randomNumber = Math.floor(Math.random()*4); // Generates a random number from 0 to 3
    var randomChosenColour = buttonColours[randomNumber]; // Randomly chooses a color from the buttonCoulours array
    gamePattern.push(randomChosenColour); // Adds the random chosen color to the gamePattern array

    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    

    playSound(randomChosenColour);
    animatePress(randomChosenColour)
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

// Create a function that restarts the entire game and resets all the values when commits an error
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}