import _ from 'lodash';
import { gcdRules } from '../cli.js';
import startGame from '../index.js';

const getGcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};
const getCorrectAnswerAndQuestion = () => {
  const firstrandomInt = _.random(20);
  const secondrandomInt = _.random(20);
  const question = `${firstrandomInt} ${secondrandomInt}`;
  const correctAnswer = getGcd(firstrandomInt, secondrandomInt).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(gcdRules, getCorrectAnswerAndQuestion);
};
