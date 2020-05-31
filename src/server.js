
const express = require('express');
const path = require('path');
const app = express();

class Server {
  setUp() {
    return this
    /* eslint-disable no-undef */
      .init(process.env.PORT || 8080)
      .start()
  }

  init(port) {
    app.listen(port, () => {
      console.log(`Server started on ${port}`);
    });
    return this;
  }

  start() {
    /* eslint-disable no-undef */
    app.use(express.static(path.join(__dirname, '../public/')));
  }
}

module.exports = Server;