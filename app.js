/* 
GAME FUNCTION:
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct anser if they lose
- Let player choose to play again
*/

// game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//asign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number between ${min} and ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    //disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = "green";
    // set message
    setMessage(`${winningNum} is correct!`, "green");
  } else {
  }
});

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
