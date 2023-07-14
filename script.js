// array of the game choices
const choices = ['rock', 'paper', 'scissors']

// Randomly selects (Math.random) from the array of choices (length) from the list of choices and
// generates a random choice for the computer selection
function getComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  return randomChoice
}

//Rules of the game
function game(playerChoice, computerSelection) {
  if (
    (playerChoice === 'rock' && computerSelection === 'scissors') ||
    (playerChoice === 'scissors' && computerSelection === 'paper') ||
    (playerChoice === 'paper' && computerSelection === 'rock')
  ) {
    return (document.querySelector('div.result').textcontent = 'Player Wins!')
  } else if (playerChoice === computerSelection) {
    return (document.querySelector('div.result').textContent = "It's a DRAW!")
  } else {
    return (document.querySelector('div.result').textContent = 'Computer Wins!')
  }
}
//Gather player choice input
function playerFinalInput(playerChoice) {
  const computerSelection = getComputerChoice()
  game(playerChoice, computerSelection)

  console.log(playerChoice)
  console.log(computerSelection)
}

////Play 5 games
// try {
//   for (let i = 0; i < 5; i++) {
//     const result = game();
//   }
// } catch (error) {
//   console.log(error);
// }

//DOM for the rock, paper, and scissors game
const rockImage = document.querySelector('.rock')
const paperImage = document.querySelector('.paper')
const scissorsImage = document.querySelector('.scissors')

const rock = rockImage
const paper = paperImage
const scissors = scissorsImage

// const buttons = document.querySelectorAll('button')

//addEventListener and console log of click/DOM target list (classList)

function imageClick(event) {
  const eventClick = event.target
  console.log(eventClick.classList)
}

rockImage.addEventListener('click', () => playerFinalInput('rock'))
paperImage.addEventListener('click', () => playerFinalInput('paper'))
scissorsImage.addEventListener('click', () => playerFinalInput('scissors'))

// if (imageClick) {
//   imageClick == 'rock' || rock
//   return 'rock wins!'
// }

//Results are entered into div for display
const result = (document.querySelector('div.result').textContent =
  "The `${playerFinalInput}` Wins!'")
