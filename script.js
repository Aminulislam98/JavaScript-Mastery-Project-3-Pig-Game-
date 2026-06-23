'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// global score
const globalScore = [0, 0];

// Active player
let activePlayer = 0;

// Storing the dice score in variable ;
let currentScore = 0;

// Rolling dice functionality;
btnRoll.addEventListener('click', function () {
  // Generate the random number between 1 and 6;
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display roll dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch Player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

// Holding the current score into global active player;
btnHold.addEventListener('click', function () {
  // add current score to to active player's scorem
  globalScore[activePlayer] += currentScore;

  // showing the totalScore in global
  document.getElementById(`score--${activePlayer}`).textContent =
    globalScore[activePlayer];

  // turning the current player current score 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Switching the player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
