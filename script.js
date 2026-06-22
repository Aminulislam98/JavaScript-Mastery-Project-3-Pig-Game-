'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality;
btnRoll.addEventListener('click', function () {
  // Generate the random number between 1 and 6;
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display roll dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
});
