var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  if (!req.isAuthenticated())
    return res.redirect('/login');
  next()
})

router.post('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
  // res.send('respond with a resource');
});

router.put('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

router.delete('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
