import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';
const getValueExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getValueExpression(number1, number2, operator).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(rules, generateRound);
};
