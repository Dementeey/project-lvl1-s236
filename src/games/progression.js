import { cons } from 'hexlet-pairs';
import engine, { getRandomInt } from '..';

const rules = 'What number is missing in this progression?';
const generator = () => () => {
  const random1 = getRandomInt(1, 10);
  let num = 1;
  const numbers = [];

  for (let i = 0; i < 9; i += 1) {
    numbers.push(num += random1);
  }

  const answer = numbers.splice(4, 1, '..');
  const quest = numbers.join(' ');

  return cons(quest, answer);
};

export default () => engine(rules, generator());
