# Simon-Says-Game-jQuery

<h1>Simon Says Game</h1>

- Crafted this game using HTML, CSS, and JavaScript 
- The entire game was brought to life through the application and deployment of the jQuery library.
- The utilization of jQuery significantly streamlined the process, making it more efficient in terms of time consumption.
- Commencing the project, I initiated with a straightforward HTML code featuring an H1 tag for the primary game message.
- Inside a container div, I designed two rows, each applied with two distinct colors.
- All four buttons, each representing a specific color, were incorporated respectively.
- The Press Start 2P font from Google Fonts was selected to enhance the visual aesthetics of the text.

- For the JavaScript segment, I began by constructing an array including the four colors: red, blue, green, and yellow.
- I established an empty array designated to store the patterns clicked by the player.
- Additionally, another empty array was initialized to hold the computer-generated random pattern for each level.

- A boolean flag was introduced with an initial value of "false," which shifts to "true" upon the game's initiation.
- A variable was designated to track the game's current level, initialized to 0 as its default state.

- An anonymous function was created, equipped with an event listener that triggers when a key is pressed, thus initiating the game and altering the flag to "true."

- Another anonymous function, featuring a click event listener, was implemented to target all buttons. Upon clicking any button, its corresponding color was added to the player's clicked array.

- The "checkAnswer" function, taking "currentLevel" as a parameter, was developed. It incorporates an if statement that examines the player's current level. If an error is detected in the player's input, the entire game restarts.

- "nextSequence," a function responsible for advancing the level by 1 upon invocation, was devised. Additionally, it generates a random number to select a color from the color array.

- "playSound," another function, was established to associate the specific color with its corresponding sound effect.
- The "animatePress" function was created, offering a visual element by applying a background style to the buttons when clicked.

- Concluding the implementation, the "startOver" function was introduced. This function comes into play when the player commits an error, facilitating a complete game restart by resetting all relevant values.
