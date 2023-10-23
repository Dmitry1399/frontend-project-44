#!/usr/bin/env node

import _ from 'lodash';
import readlineSync from 'readline-sync';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isEven = (num) => (num % 2 === 0);
    const randomInt = _.random(100);
    const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');
    console.log(`Question: ${randomInt}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === getCorrectAnswer(isEven(randomInt))) {
      console.log('Correct!');
    } else {
      const errorMessage = console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(isEven(randomInt))}' \n Let's try again, ${userName}!`);
      return errorMessage;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

brainEvenGame();
