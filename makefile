install: 
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
startEven:
	npm run babel-node -- src/bin/brain-even.js
startCalc:
	npm run babel-node -- src/games/calc.js
publish:
	npm publish
lint:
	npm run eslint src/