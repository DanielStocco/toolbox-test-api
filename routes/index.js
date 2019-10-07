const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  res.status(200).send(req.body);
});

module.exports = router;
