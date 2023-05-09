// Global constants
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const DEFAULT_CHOICE = ROCK;

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

const userPlay = () => {
  // Choise the value via prompt window
  let userInput = prompt(`Enter either ${ROCK}, ${PAPER} or ${SCISSORS}`, ' ');

  // If value is null terminate the game

  if (!userInput) {
    alert('Game has terminated. Good Bye! 👋');
    return;
  }

  userInput = userInput.trim().toUpperCase();

  // Check the user enters a valid input
  if (userInput !== ROCK && userInput !== PAPER && userInput !== SCISSORS) {
    // If value is invalid choose the default one
    alert(
      `${
        userInput === '' ? 'Empty value' : userInput
      } is INVALID CHOICE!💥 ${DEFAULT_CHOICE} as a default has been chosen for you!`
    );
    return DEFAULT_CHOICE;
  }
  return userInput;
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

// Message for console info
const message = (gameRound, userSelection, computerSelection) => {
  // Show round and players choice
  console.log(`Round: ${gameRound}`);
  console.log(`Your choice is ${userSelection}`);
  console.log(`Computer choice is ${computerSelection}`);
  console.log(`${playRound(userSelection, computerSelection)}`);
  console.log('----------------------');
};

// Determin the game winner
const winnerGame = (playerScore, computerScore) => {
  // Compare the scores and determin winner of the game
  if (playerScore > computerScore) {
    console.log(
      `You win the game! The score is ${playerScore} - ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lose the game! The score is ${computerScore} - ${playerScore}`
    );
  } else {
    console.log(
      `The game ends in a ${RESULT_DRAW}! The score is ${playerScore}-${computerScore}.`
    );
  }
};

const game = () => {
  alert(
    `This is traditional ${ROCK} ✊🏻, ${PAPER} 🖐🏻 and ${SCISSORS} ✌🏻 game. \nFor starting the game press OK button.\nIf you want to "EXIT" the game press "CANCEL".\nENJOY!😉`
  );

  let userScore = 0;
  let compScore = 0;

  // Created 5 rounds play with for loop
  for (let round = 1; round <= 5; round++) {
    // Generate computer choise value via computerPlay() function
    const computerChoise = computerPlay();

    // Generate user choise value via userPlay() function
    const userChoice = userPlay();

    // If value is null terminate the game
    if (!userChoice) {
      return;
    }

    // Call playRound() function and pass proper arguments for a single round
    const singleRound = playRound(userChoice, computerChoise);

    // Play the single round and update score
    if (
      singleRound.includes(
        `You win the round! ${userChoice} beats ${computerChoise}`
      )
    ) {
      userScore++;
    } else if (
      singleRound.includes(
        `You Lose the round! ${computerChoise} beats ${userChoice}`
      )
    ) {
      compScore++;
    }
    // Print the messages on console
    message(round, userChoice, computerChoise);
  }
  // Print the winner on console
  winnerGame(userScore, compScore);
};
game();
