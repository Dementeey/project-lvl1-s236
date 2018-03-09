import { cons } from 'hexlet-pairs';
import engine from '..';

const rules = 'Find the greatest common divisor of given numbers. \n ';
const generator = () => () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const getRandom = getRandomInt(1, 100);
  const getRandom2 = getRandomInt(1, 100);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const quest = `${getRandom} ${getRandom2}`;
  const answer = gcd(getRandom, getRandom2);
  return cons(quest, answer);
};

export default () => engine(rules, generator());
