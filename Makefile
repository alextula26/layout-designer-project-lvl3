install:
	npm install

lint:
	npx stylelint ./app/scss/*.scss
	pug-lint ./app/pug/**/*.pug

pug-index:
	pug ./app/pug/pages/index.pug --pretty -o ./dist/

pug-chat:
	pug ./app/pug/pages/chat.pug --pretty -o ./dist/

pug:
	make pug-index
	make pug-chat