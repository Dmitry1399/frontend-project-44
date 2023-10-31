import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = (startNum, step, length) => {
  const progressionArr = [];
  for (let i = 0; i < length; i += 1) {
    const nextNum = startNum + step * i;
    progressionArr.push(nextNum);
  }
  return progressionArr;
};

const generateRound = () => {
  const startNum = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 10);
  const length = 10;
  const progressionArr = getProgression(startNum, step, length);
  const hiddenIndex = getRandomNumber(0, progressionArr.length - 1);
  const correctAnswer = String(progressionArr[hiddenIndex]);
  progressionArr[hiddenIndex] = '..';
  const question = progressionArr.join(' ');
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(description, generateRound);
};
