import * as games from '..';

games.welcome();
games.rulesGame('Answer "yes" if number even otherwise answer "no". \n ');
const userNames = games.userName();
games.greeting(userNames);

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = games.getRandomInt(1, 101);
    const getYesNo = randomNum % 2 === 0 ? 'yes' : 'no';
    games.question(randomNum);
    const answer = games.getUserAnswer();
    if (answer !== getYesNo) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getYesNo}' \nLet's try again, ${userNames}!`);
    }
    console.log('Correct!');
  }
  return games.userCongratulation(userNames);
};
