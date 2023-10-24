import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getAnswer = () => readlineSync.question('Your answer: ');
export const getQuestion = (question) => console.log(`Question: ${question}`);

export const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const calcRules = () => console.log('What is the result of the expression?');

export const getResultEvalution = {
  wrong: (name, answer, correctAnswer) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
  },
  correct: () => console.log('Correct!'),
  congrats: (name) => console.log(`Congratulations, ${name}!`),
};
