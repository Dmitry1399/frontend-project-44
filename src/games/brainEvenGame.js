import _ from 'lodash';
import { evenRules } from '../cli.js';
import startGame from '../index.js';

const isEven = (num) => (num % 2 === 0);
const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');

const getCorrectAnswerAndQuestion = () => {
  const randomInt = _.random(100);
  const correctAnswer = getCorrectAnswer(isEven(randomInt));

  return {
    question: randomInt,
    correctAnswer,
  };
};

export default () => {
  startGame(evenRules, getCorrectAnswerAndQuestion);
};
