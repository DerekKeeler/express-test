'use strict';

const
  conn = require('../persistance/static'),
  cArgs = ['Content-Type', 'application/vnd.api+json'];

// TODO: refactor to not share similar code.
 
function formatUrl(url) {
  // Remove any trailing slashes because they screw up the conn path finding
  return url && url.slice(-1) === '/' ? url.slice(0, -1) : url;
}

module.exports = {
  get(req, res) {
    const reqPath = formatUrl(req.params[0]);

    return conn.get(reqPath)
    .then(val => 
      res.set.apply(res, cArgs).send(val)
    )
    .catch(err =>
      res.status(404).send(err)
    );
  },

  post(req, res) {
    const reqPath = formatUrl(req.params[0]);

    return conn.set(reqPath, req.body)
    .then(val =>
      res.set.apply(res, cArgs).send(val)
    );
  }
};