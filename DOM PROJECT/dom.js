'use strict';
// to access html elements and styles (changing text, style and many more)
// adjacent - susjedni

// DOM IS THE WHOLE REPRESENTATION OF THE HTML DOCUMENT

// dom is not part of JS
// DOM and DOM Methods are part of web api's, so that is why dom works
// web api's are libraries that browsers implements that  we can access from our JS code
// web API's are written in JS, soo thats why there are available to use

// let message = document.querySelector('.message');
// document.querySelector('.message').textContent = 'brooo correct number';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 10;
// use the value property to get and set the value
// document.querySelector('.guess').value = 100;

// EVENT LISTENER
// arguments: 1. type of the event and 2. the reaction on the certain event

// const guess = function () {
//   console.log(document.querySelector('.guess').value);
// };

// document.querySelector('.check').addEventListener('click', guess);

// macOS: CMD + CTRL + space
// Windows 10: Windows + .

let randomNumber = Math.trunc(Math.random() * 19) + 1;
const again = document.querySelector('.again');
// console.log(again);
let highscore = 0;
// console.log(typeof highscore);
let score = 20;

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const decreasingScore = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    document.querySelector('.message').textContent = `The number is too ${
      guess < randomNumber ? 'too low, try higher' : ' to high, try lower'
    }`;
    score--;
    displayScore(score);
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You lost the game, try again');
  }
};

// WE ONLY WANT THE SECRET NUMBER TO BE DEFINED ONCE, IF DEFINED INSIDE OF THE EVENT LISTENER THEN ON EACH CLICK THE RANDOM NUMBER WILL BE CREATED

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  console.log(randomNumber);

  // guess !== 'numbe_r'
  // when there is no input
  if (!guess) {
    displayMessage('Type a number please 👀');
    // when guess is correct
  } else if (guess === randomNumber) {
    displayMessage('Well done it is correct');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    // highscore.textContent = score;
    // if (score > highscore) {
    //   highscore = score;
    //   document.querySelector('.highscore').textContent = highscore;
    // }

    while (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      break;
    }

    // when guess is too low
    // two conditions are unified, whether is greater or less === (!==)
  } else if (guess !== randomNumber) {
    decreasingScore();
  }
  // if (score > 1) {
  //   document.querySelector('.message').textContent =
  //     'The number is too low, try higher';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.score').textContent = 0;
  //   document.querySelector('.message').textContent =
  //     'You lost the game, try again';
  // }
  // when guess is too high

  //  else if (guess > randomNumber) {
  // decreasingScore();
  // if (score > 1) {
  //   document.querySelector('.message').textContent =
  //     'The number is too high, try lower';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.score').textContent = 0;
  //   document.querySelector('.message').textContent =
  //     'You lost the game, try again';
  // }
});

//   if (guess) {
//     document.querySelector('.message').textContent = 'good boy';
//   }
// as soon as the event happpens the function will be called

// THE FIRST SCENARIO IS ALWAYS TO ASSUME THAT THERE IS ACTUALLY NO INPUT
// IT IS BETTER TO HAVE DATA IN OUR CODE AND NOT JUST IN THE DOM

again.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 19) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'black';
});
