# stocktracker

[![Join the chat at https://gitter.im/pbrejcha/stocktracker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pbrejcha/stocktracker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Dependencies
1. `npm install` to install server node dependencies
2. jspm to install client-side dependencies
  * `npm install jspm -g`
  * `jspm install -y`
3. gulp
  * `npm install gulp -g`
4. [mongo](http://www.mongodb.org/)

### Running the app
1. cd into app directory
2. `gulp`
3. app should be running on localhost:3000
   * note: if you get a 404 for aurelia-bootstrapper ` GET http://localhost:3000/public/components/github/aurelia/bootstrapper@0.9.3.js`; open public/config.js and remove the `public' from lines 5 & 6 (github and npm). This is because when setting up jspm, I accidentally pointed the jspm packages install directory to the wrong place. 
