'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let message = document.querySelector('.message');
let number = document.querySelector('.number');

let highscore = 0;
let score = 20;
let scoreText = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    message.textContent = '⛔ No number!';

    // When player winds
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score -= 1;
      scoreText.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreText.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreText.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
