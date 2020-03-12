const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body.login, req.body.password);

  res.send({ok: true});
});

module.exports = router;
