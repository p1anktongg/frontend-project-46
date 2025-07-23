install: 
				npm ci
publish: 
				npm publish --dry-run
				
install:
    npm ci

start:
    npm link

test:
    npm test

test-watch:
    npm run test:watch

lint:
    npm run lint

.PHONY: test test-watch lint publish