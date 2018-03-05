import readlineSync from 'readline-sync';

export const yourName = () => readlineSync.question('May I have your name? ');
export const hello = name => console.log(`Hello, ${name}!`);
