import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(description, generateRound);
};
