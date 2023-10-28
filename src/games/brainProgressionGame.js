import _ from 'lodash';
import { progressionRules } from '../cli.js';
import startGame from '../index.js';

const getProgressionArr = (startNum, progressionGap) => {
  const progressionArr = [];
  for (let i = 0; i < 10; i += 1) {
    const nextNum = startNum + progressionGap * i;
    progressionArr.push(nextNum);
  }
  return progressionArr;
};

const hideMissingNum = (indexOfMissingNum) => (num, index) => (
  (index === indexOfMissingNum) ? '..' : num
);

const getCorrectAnswerAndQuestion = () => {
  const startNum = _.random(20);
  const progressionGap = _.random(1, 10);
  const indexOfMissingNum = _.random(9);

  const progressionArr = getProgressionArr(startNum, progressionGap);
  const questionArr = progressionArr.map(hideMissingNum(indexOfMissingNum));
  const question = questionArr.join(' ');
  const answerNum = (startNum + progressionGap * indexOfMissingNum);
  const correctAnswer = answerNum.toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(progressionRules, getCorrectAnswerAndQuestion);
};
