import { cons } from 'hexlet-pairs';
import engine from '..';

const rules = 'Answer "yes" if number even otherwise answer "no". \n ';
const generator = () => () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const quest = getRandomInt(1, 100);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return cons(quest, answer);
};

export default () => engine(rules, generator());
