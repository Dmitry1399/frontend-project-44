import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateRound = () => {
  const randomNum = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return {
    question: randomNum,
    correctAnswer,
  };
};

export default () => {
  startGame(description, generateRound);
};
