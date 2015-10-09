'use strict';

const
  router = require('express').Router(),
  parser = require('body-parser');

let schema = [];

router.get('/', (req, res) => {
  res.json(schema);
});

// router.get('/:key', (req, res) => {
//   const key = req.params.key;

//   if(key && schema.data[key]) {
//     res.json(schema.data[key]);
//   }

//   res.json(schema);
// });

module.exports = router;
