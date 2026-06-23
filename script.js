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

// Switch the player
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// turning the current player current score 0
const currentScoreZero = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
};

// new game , reset al score;

const playNewGame = function () {
  currentScoreZero();
  globalScore[0] = 0;
  globalScore[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};

// Rolling dice functionality;
btnRoll.addEventListener('click', function () {
  // Generate the random number between 1 and 6;
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display roll dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // checking the player dice
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  // Switch Player
  else {
    currentScoreZero();
    switchPlayer();
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
  currentScoreZero();

  // Switching the player
  switchPlayer();
});

// Play new game;
btnNew.addEventListener('click', playNewGame);
