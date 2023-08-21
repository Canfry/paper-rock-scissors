// Game start:
// 2 players: player one and computer
// player one select between paper, rock, scissors
// player computer select between paper, rock, scissors
// if both select the same => tied
// if scissors and rock => rock wins
// if paper rock => paper wins
// if paper scissors => scissors win
// Score = 0
// when score arrives at 5 player wins
// option to restart

let choice = ['paper', 'rock', 'scissors'];
const btnChoice = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
const main = document.querySelector('main');
let playerScore = 0;
let computerScore = 0;
computerScoreDisplay.textContent = computerScore;
playerScoreDisplay.textContent = playerScore;

// game function
// Start the game
function game() {
  let playerSelection;
  btnChoice.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      playerSelection = e.target.textContent.toLowerCase();
      playRound(playerSelection);
    })
  );
}

// playRound function
// Player and computer select choice on each round
// if both select the same => tied
// if scissors and rock => rock wins
// if paper rock => paper wins
// if paper scissors => scissors win
// scores update
// Plays rounds. When one score = 5 => wins
// disabled button + win message
// Option de restart
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = '';
  if (playerChoice === 'paper' && computerChoice === 'paper') {
    result = `Tied! You both choose ${playerChoice}`;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore += 1;
    result = `You won! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore += 1;
    result = `You lost! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore += 1;
    result = `You lost! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'rock' && computerChoice === 'rock') {
    result = `Tied! You both choose ${playerChoice}`;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore += 1;
    result = `You won! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore += 1;
    result = `You won! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore += 1;
    result = `You lost! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    result = `Tied! You both choose ${playerChoice}`;
  }

  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;

  if (playerScore === 5) {
    document.querySelector('.result-message').textContent = 'You won!!!';
    btnChoice.forEach((btn) => (btn.disabled = true));
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart';
    main.appendChild(restartBtn);
    restartBtn.addEventListener(
      'click',
      window.location.reload.bind(window.location)
    );
  } else if (computerScore === 5) {
    document.querySelector('.result-message').textContent = 'computer won!!!';
    btnChoice.forEach((btn) => (btn.disabled = true));
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart';
    main.appendChild(restartBtn);
    restartBtn.addEventListener(
      'click',
      window.location.reload.bind(window.location)
    );
  } else {
    document.querySelector('.result-message').textContent = result;
  }
}

// getComputerChoice function
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choice.length);
  const computerChoice = choice[randomNumber];
  return computerChoice;
}

game();
