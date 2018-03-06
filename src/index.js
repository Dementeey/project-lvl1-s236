import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to Brain Games');
  const userName = readlineSync.question('May I have your name? ');
  const greeting = name => console.log(`Hello, ${name}!`);
  return greeting(userName);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const question = num => console.log(`Question : ${num}`);
const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const game = () => {
  console.log('Welcome to Brain Games');
  console.log('Answer "yes" if number even otherwise answer "no". \n ');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n `);

  const end = '';

  for (let i = 0; i < 3; i += 1) {
    const questionNumber = getRandomInt(1, 101);
    question(questionNumber);
    const getYesNo = questionNumber % 2 === 0 ? 'yes' : 'no';

    const answer = getUserAnswer();
    if (answer !== getYesNo) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getYesNo}' \nLet's try again, ${userName}!`);
    } else if (answer === getYesNo) {
      console.log('Correct!');
    }

    if (i === 2) {
      return end + console.log(`Congratulations, ${userName}!`);
    }
  }
  return end;
};
