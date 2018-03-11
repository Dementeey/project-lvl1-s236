import { cons } from 'hexlet-pairs';
import engine, { getRandomInt } from '..';

const rules = 'What is the result of the expression?';
const generator = () => () => {
  const getRandom = getRandomInt(50, 100);
  const getRandom2 = getRandomInt(1, 50);
  const i = getRandomInt(0, 4);

  let answer = 0;
  let quest = '';

  switch (true) {
    case (i === 1):
      answer = getRandom + getRandom2;
      quest = `${getRandom} + ${getRandom2}`;
      break;
    case (i === 2):
      answer = getRandom - getRandom2;
      quest = `${getRandom} - ${getRandom2}`;
      break;
    case (i === 3):
      answer = getRandom * getRandom2;
      quest = `${getRandom} * ${getRandom2}`;
      break;
    default:
      answer = getRandom + getRandom2;
      quest = `${getRandom} + ${getRandom2}`;
      break;
  }

  return cons(quest, answer);
};

export default () => engine(rules, generator());
