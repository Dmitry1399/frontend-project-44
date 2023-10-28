import _ from 'lodash';
import { primeRules } from '../cli.js';
import startGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % 2 === 0) return false;
  }
  return true;
};

const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');

const getCorrectAnswerAndQuestion = () => {
  const randomNum = _.random(20);
  const correctAnswer = getCorrectAnswer(isPrime(randomNum));
  return {
    question: randomNum,
    correctAnswer,
  };
};

export default () => {
  startGame(primeRules, getCorrectAnswerAndQuestion);
};
