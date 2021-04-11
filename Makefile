install:
	npm install

lint:
	npx stylelint ./app/scss/**/*.scss
	pug-lint ./app/pug/**/*.pug
	npx htmlhint ./dist/*.html

pug-index:
	pug ./app/pug/pages/index.pug --pretty -o ./dist/

pug-chat:
	pug ./app/pug/pages/chat.pug --pretty -o ./dist/

pug:
	make pug-index
	make pug-chat

sass:
	sass ./app/scss/custom.scss ./dist/css/style.css
	npx stylelint --fix ./dist/css/style.css

build:
	make pug
	make sass

deploy:
	npx surge ./dist/