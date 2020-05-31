const Server = require('./src/server');
const server = new Server();

const init = () =>  {
  server.setUp();
}
init();