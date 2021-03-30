install:
	npm install

lint:
	npx stylelint ./app/scss/*.scss

pug:
	pug ./app/pug/{index,chat}.pug --pretty -o ./app/