var express = require('express');
var router = express.Router();

let users = [
  {
    id: '1',
    name: 'Name',
    age: 16,
  },
]

router.post('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.put('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

router.delete('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
