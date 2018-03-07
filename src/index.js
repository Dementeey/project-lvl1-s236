import readlineSync from 'readline-sync';

// export const welcomeBrain = () => {
//   console.log('Welcome to Brain Games');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   return userName;
// };

export const welcome = () => console.log('Welcome to Brain Games');
export const rulesGame = str => console.log(`${str}`);
export const userName = () => readlineSync.question('May I have your name? ');
export const greeting = name => console.log(`Hello, ${name}! \n `);
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const question = num => console.log(`Question : ${num}`);
export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
export const userCongratulation = name => console.log(`Congratulations, ${name}!`);
