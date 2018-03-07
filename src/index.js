import readlineSync from 'readline-sync';

// export const welcome = () => console.log('Welcome to Brain Games');
// export const rulesGame = str => console.log(`${str}`);
// export const userName = () => readlineSync.question('May I have your name? ');
// export const greeting = name => console.log(`Hello, ${name}! \n `);
// exportconst getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
// export const question = num => console.log(`Question : ${num}`);
// export const getUserAnswer = () => {
//   const answer = readlineSync.question('Your answer: ');
//   return answer;
// };
// export const incorrect = (answer, answerCorrect, name) =>
// console.log(`'${answer}' is wrong answer ;(.
// Correct answer was '${answerCorrect}' \nLet's try again, ${name}!`);

// export const correct = () => console.log('Correct!');
export const userCongratulation = name => console.log(`Congratulations, ${name}!`);


export const engine = (rulesGame, quest, answer) => {
  console.log('Welcome to Brain Games');
  console.log(`${rulesGame}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n `);

  for (let i = 0; i < 3;) {
    const question = num => console.log(`Question : ${num}`);
    question(quest);
    const getUserAnswer = () => {
      const answerUser = readlineSync.question('Your answer: ');
      return answerUser;
    };
    const answerUser = getUserAnswer();

    if (Number(answerUser) !== answer) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}' \nLet's try again, ${userName}!`);
    } if (Number(answerUser) === answer) {
      console.log('Correct!');
      i += 1;
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
