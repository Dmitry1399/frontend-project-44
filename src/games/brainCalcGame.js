import _ from 'lodash';
import { calcRules } from '../cli.js';
import startGame from '../index.js';

const getRandomExpression = () => {
  const randomExpression = [
    ['+', ((a, b) => a + b)],
    ['-', ((a, b) => a - b)],
    ['*', ((a, b) => a * b)],
  ];
  return randomExpression[_.random(2)];
};

const getCorrectAnswerAndQuestion = () => {
  const firstRandomInt = _.random(20);
  const secondRandomInt = _.random(20);
  const randomExpression = getRandomExpression();

  const question = `${firstRandomInt} ${randomExpression[0]} ${secondRandomInt}`;
  const correctAnswer = randomExpression[1](firstRandomInt, secondRandomInt).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(calcRules, getCorrectAnswerAndQuestion);
};
