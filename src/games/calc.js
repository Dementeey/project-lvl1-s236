import { cons, car, cdr } from 'hexlet-pairs';
import * as games from '..';

games.welcome();
games.rulesGame('What is the result of the expression? \n ');
const userNames = games.userName();
games.greeting(userNames);

export default () => {
  for (let i = 0; i < 1; i += 1) {
    const randomPair = cons(games.getRandomInt(1, 20), games.getRandomInt(1, 21));
    const randomAnswer = car(randomPair) + cdr(randomPair);
    games.question(`${car(randomPair)} + ${cdr(randomPair)}`);
    const answer = games.getUserAnswer();
    if (Number(answer) !== randomAnswer) {
      return games.incorrect(answer, randomAnswer, userNames);
    }
    games.correct();
  }
  for (let i = 0; i < 1; i += 1) {
    const randomPair = cons(games.getRandomInt(21, 80), games.getRandomInt(1, 20));
    const randomAnswer = car(randomPair) - cdr(randomPair);
    games.question(`${car(randomPair)} - ${cdr(randomPair)}`);
    const answer = games.getUserAnswer();
    if (Number(answer) !== randomAnswer) {
      return games.incorrect(answer, randomAnswer, userNames);
    }
    games.correct();
  }
  for (let i = 0; i < 1; i += 1) {
    const randomPair = cons(games.getRandomInt(1, 10), games.getRandomInt(1, 20));
    const randomAnswer = car(randomPair) * cdr(randomPair);
    games.question(`${car(randomPair)} * ${cdr(randomPair)}`);
    const answer = games.getUserAnswer();
    if (Number(answer) !== randomAnswer) {
      return games.incorrect(answer, randomAnswer, userNames);
    }
    games.correct();
  }
  return games.userCongratulation(userNames);
};
