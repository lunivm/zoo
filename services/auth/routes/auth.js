const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const { query } = require('express-validator');
const validatorErrorHandler = require('../core/validator-error-handler');

router.get('/',
  [
    query('response_type', 'response_type required').equals('code'),
    query('scope', 'required').notEmpty(),
    query('client_id', 'required').notEmpty(),
    query('state', 'required').notEmpty(),
    query('redirect_uri', 'required').notEmpty()
  ],
  validatorErrorHandler,
  (req, res) => {
    const redirectUrl = req.query.redirect_uri;
    const query = {
      state: req.query.state,
      code: '12wert'
    };

    res.redirect(`${redirectUrl}?${querystring.stringify(query)}`);
  }
);

module.exports = router;
