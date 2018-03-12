import { cons } from 'hexlet-pairs';
import engine, { getRandomInt } from '..';

const rules = 'Balance the given number.';
const generator = () => {
  const balanceNum = (num) => {
    const getSortArr = (n) => {
      const str = String(n);
      const arr = Array.from(str);
      const arrSort = arr.sort();
      return arrSort;
    };

    const arrSort = getSortArr(num);
    const min = Number(arrSort[0]);
    const max = Number(arrSort[arrSort.length - 1]);

    if ((max - min) <= 1) {
      return arrSort.join('');
    }

    arrSort[0] = min + 1;
    arrSort[arrSort.length - 1] = max - 1;

    const temp = String(arrSort.join(''));
    return balanceNum(temp);
  };
  const quest = getRandomInt(100, 2018);
  const answer = balanceNum(quest);

  return cons(quest, answer);
};

export default () => engine(rules, generator);
