var express = require('express');
var router = express.Router();
var DB = require("../db/dbInit.js")

router.get('/', async (req, res, next) => {
  var db = await DB.Get()
  console.log(db)
  res.send('respond with a resource');
});

module.exports = router;