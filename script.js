// array of the game choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Randomly selects (Math.random) from the array of choices (length) from the list of choices and
// generates a random choice for the computer selection
function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// prompt user input from player and check if input is null or a string and force user to input again
function playerSelection() {
  let playerInput = prompt('Enter your choice of:\nRock, Paper, or Scissors?');

  if (playerInput === '') {
    alert(
      "Please type 'Rock, Paper, or Scissors' or press cancel if you do not wish to play"
    );
    return playerSelection();
  }
  // Capitalize first letter of playerInput and join with lower case slice
  let finalPlayerInput =
    playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
  // If finalPlayerInput is the same as one of the game choices with or without case sensitivity
  // return the final player input fixed to the first letter capitalized + lower case of remaining letters
  if (choices.includes(finalPlayerInput)) {
    return finalPlayerInput;
  } else {
    // Otherwise, prompt the user to enter a valid option
    alert("Make sure to correctly enter either 'Rock, Paper, or Scissors!'");
    return playerSelection();
  }
}

function winner(playerChoice, computerSelection) {
  if (playerChoice == 'Rock' && computerSelection == 'Scissors') {
    return 'Rock beats Scissors, Player wins!';
  }
  if (playerChoice == 'Scissors' && computerSelection == 'Paper') {
    return 'Scissors beats Paper, Player wins!';
  }
  if (playerChoice == 'Paper' && computerSelection == 'Rock') {
    return 'Paper beats Rock, Player wins!';
  }
  if (computerSelection == 'Rock' && playerChoice == 'Scissors') {
    return 'Rock beats Scissors, Computer wins!';
  }
  if (computerSelection == 'Scissors' && playerChoice == 'Paper') {
    return 'Scissors beats Paper, Computer wins!';
  }
  if (computerSelection == 'Paper' && playerChoice == 'Rock') {
    return 'Paper beats Rock, Computer wins!';
  }
}

//function draw determines if playerchoice is equal to computer, if so, player does not beat computer, so draw!
function draw(playerChoice, computerSelection) {
  if (playerChoice == computerSelection) {
    return `Player's choice of ${playerChoice} does not beat the Computer's choice of ${computerSelection}: Draw!`;
  }
}

function game() {
  const computerSelection = getComputerChoice();
  const playerChoice = playerSelection();
  const resultOfDraw = draw(playerChoice, computerSelection);
  const resultOfWinner = winner(playerChoice, computerSelection);

  if (playerChoice === null) {
    console.log('Player input is null. Game terminated.');
    alert('Game terminated. Please restart the game to play again.');
    throw new Error('Game terminated');
  }

  console.log(playerChoice);
  console.log(computerSelection);

  if (resultOfWinner) {
    console.log(resultOfWinner);
    alert(resultOfWinner);
    return resultOfWinner;
  } else if (resultOfDraw) {
    console.log(resultOfDraw);
    alert(resultOfDraw);
    return resultOfDraw;
  }
}

try {
  for (let i = 0; i < 5; i++) {
    const result = game();
  }
} catch (error) {
  console.log(error);
}
