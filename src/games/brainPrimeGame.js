import _ from 'lodash';
import { primeRules } from '../cli.js';
import startGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');

const getCorrectAnswerAndQuestion = () => {
  const randomNum = _.random(100);
  const correctAnswer = getCorrectAnswer(isPrime(randomNum));
  return {
    question: randomNum,
    correctAnswer,
  };
};

export default () => {
  startGame(primeRules, getCorrectAnswerAndQuestion);
};
