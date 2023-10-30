import getRandomNumber from '../helpers.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const getProgressionArr = (startNum, progressionGap, countOfComponents) => {
  const progressionArr = [];
  for (let i = 0; i < countOfComponents; i += 1) {
    const nextNum = startNum + progressionGap * i;
    progressionArr.push(nextNum);
  }
  return progressionArr;
};

const generateRound = () => {
  const startNum = getRandomNumber(0, 20);
  const progressionGap = getRandomNumber(1, 10);
  const countOfComponents = 10;
  const progressionArr = getProgressionArr(startNum, progressionGap, countOfComponents);
  const hiddenIndex = getRandomNumber(1, (countOfComponents - 1));
  const correctAnswer = String(progressionArr[hiddenIndex - 1]);
  progressionArr[hiddenIndex - 1] = '..';
  const question = progressionArr.join(' ');
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(rules, generateRound);
};
