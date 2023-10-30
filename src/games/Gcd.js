import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
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
const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(rules, generateRound);
};
