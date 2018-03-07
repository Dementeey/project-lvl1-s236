import { engine } from '..';

const rules = 'What is the result of the expression? \n ';
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const random1 = getRandomInt(1, 100);
const random2 = getRandomInt(1, 100);
const answer = random1 + random2;

export default () => engine(rules, `${random1} + ${random2}`, answer);
