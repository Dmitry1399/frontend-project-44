import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return {
    question: number,
    correctAnswer,
  };
};

export default () => {
  startGame(description, generateRound);
};
