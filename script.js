const choices = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

console.log(getComputerChoice());
