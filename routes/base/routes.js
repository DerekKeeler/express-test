'use strict';

const
  router = require('express').Router(),
  handlers = require('../../handlers/base'),
  route = router.route('/*');

Object.keys(handlers)
.forEach(key => 
  route[key](handlers[key])
);

module.exports = router;
