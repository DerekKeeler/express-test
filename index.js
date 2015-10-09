'use strict';

const
  app = require('express')(),
  baseRoute = require('./routes/base/schema'),
  port = process.env.PORT || 3000;

app.use('/base/schemas', baseRoute);

module.exports = app;

if(!module.parent) {
  const server = app.listen(port, () => {
    const address = server.address();

    console.log(`HTTP is running at ${address.address}:${address.port}`);
  });
}
