import _ from 'lodash';
import { gcdRules } from '../cli.js';
import startGame from '../index.js';

const getGcd = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
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
