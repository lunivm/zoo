const login = require('./login');
const auth = require('./auth');

module.exports = app => {
  app.use('/auth/login', login);
  app.use('/auth', auth);
};
