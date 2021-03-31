install:
	npm install

lint:
	npx stylelint ./app/scss/*.scss

pug-index:
	pug ./app/pug/index.pug --pretty -o ./app/

pug-chat:
	pug ./app/pug/chat.pug --pretty -o ./app/

pug:
	make pug-index
	make pug-chat