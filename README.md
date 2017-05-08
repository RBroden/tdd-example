Setting up E2E Testing

- install protractor as a dev dependency
- create a protractor.conf.js file
- have an e2e directory with e2e tests


Running E2E Test

- Must build first, uses "npm run build"
- Run http-server and protractor at same time, uses "npm run server:prod:ci | protractor"
- The && will run the first task and then the second
- The | will run the two tasks concurrently

Note: Sometimes if e2e tests fail, possibly run "webdriver-manager update" with "npm run webdriver:update"