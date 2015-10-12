'use strict';

const
  app = require('express')(),
  baseRoute = require('./routes/base/routes'),
  parser = require('body-parser'),
  port = process.env.PORT || 3000;

app.use(parser.json());
app.use('/base', baseRoute);

module.exports = app;

if(!module.parent) {
  const server = app.listen(port, () => {
    const address = server.address();

    console.log(`HTTP is running at ${address.address}:${address.port}`);
  });
}
