import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const randomInt = getRandomNumber(1, 100);
  const correctAnswer = (isEven(randomInt) ? 'yes' : 'no');

  return {
    question: randomInt,
    correctAnswer,
  };
};

export default () => {
  startGame(rules, generateRound);
};
