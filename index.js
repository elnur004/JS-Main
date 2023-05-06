// Global constants
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';

// Generated random values for computer
const computerPlay = () => {
  const randomValue = Math.round(Math.random() * 2);
  if (randomValue === 0) {
    return ROCK;
  } else if (randomValue === 1) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Play a single round
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return RESULT_DRAW;
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    return `You win the round! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose the round! ${computerSelection} beats ${playerSelection}`;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  // Created 5 rounds play with for loop
  for (let round = 1; round <= 5; round++) {
    // Choise the value via prompt window
    const userInput = prompt(
      'Enter one of "rock", "paper" or "scissors"'
    ).toUpperCase();

    // Check the user enters a valid input
    if (userInput !== ROCK && userInput !== PAPER && userInput !== SCISSORS) {
      alert(
        `${userInput} is INVALID INPUT! Enter eather ${ROCK}, ${PAPER} or ${SCISSORS}`
      );
    }

    // Generate computer choise value via computerPlay() function
    const computerChoise = computerPlay();

    // Call playRound() function and pass proper arguments for a single round
    const singleRound = playRound(userInput, computerChoise);

    // Play the single round and update score
    if (
      singleRound.includes(
        `You win the round! ${userInput} beats ${computerChoise}`
      )
    ) {
      playerScore++;
    } else if (
      singleRound.includes(
        `You Lose the round! ${computerChoise} beats ${userInput}`
      )
    ) {
      computerScore++;
    }

    // Show round and players choice
    console.log(`Round: ${round}`);
    console.log(`Your choice is ${userInput}`);
    console.log(`Computer choice is ${computerChoise}`);
    console.log(`${playRound(userInput, computerChoise)}`);
    console.log('----------------------');
  }

  // Compare the scores and determin winner of the game
  if (playerScore > computerScore) {
    console.log(
      `You win the game! The score is ${playerScore} - ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lose the game! The score is ${playerScore} - ${computerScore}`
    );
  } else {
    console.log(
      `The game ends in a ${RESULT_DRAW}! The score is ${+playerScore}-${+computerScore}.`
    );
  }
};
game();
