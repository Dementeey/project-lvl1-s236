import { cons } from 'hexlet-pairs';
import engine, { getRandomInt } from '..';

const rules = 'What number is missing in this progression?';

const progression = () => {
  const random1 = getRandomInt(1, 10);
  let num = 1;
  const numbers = [];

  for (let i = 0; i < 9; i += 1) {
    numbers.push((num += random1));
  }
  return numbers;
};


const generator = () => {
  const arr = progression();
  const answer = arr.splice(4, 1, '..');
  const quest = arr.join(' ');

  return cons(quest, answer);
};

export default () => engine(rules, generator);
