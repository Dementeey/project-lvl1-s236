import { cons } from 'hexlet-pairs';
import engine from '..';

const rules = 'Is this number prime? \n ';
const generator = () => () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const quest = getRandomInt(2, 110);

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const answer = isPrime(quest) === true ? 'yes' : 'no';
  return cons(quest, answer);
};

export default () => engine(rules, generator());
