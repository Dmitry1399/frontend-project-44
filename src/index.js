import {
  getUserName, getAnswer, getQuestion, getResultEvalution,
} from './cli.js';

const startGame = (showRules, getCorrectAnswerAndQuestion) => {
  const userName = getUserName();
  showRules();

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { question, correctAnswer } = getCorrectAnswerAndQuestion();
    getQuestion(question);
    const answer = getAnswer();
    if (answer === correctAnswer) {
      getResultEvalution.correct();
    } else {
      getResultEvalution.wrong(userName, answer, correctAnswer);
      return;
    }
  }
  getResultEvalution.congrats(userName);
};
export default startGame;
