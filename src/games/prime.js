import { cons } from 'hexlet-pairs';
import engine, { getRandomInt } from '..';

const rules = 'Is this number prime?';
const generator = () => {
  const quest = getRandomInt(2, 110);

  const isPrime2 = (num) => {
    const iter = (n, i) => {
      if (num % i === 0) {
        return false;
      }
      if (num % i !== 0) {
        return true;
      }

      return iter(n, i + 1);
    };

    return iter(num, 2);
  };

  const answer = isPrime2(quest) === true ? 'yes' : 'no';
  return cons(quest, answer);
};

export default () => engine(rules, generator);
