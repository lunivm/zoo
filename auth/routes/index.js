const login = require('./login');

module.exports = app => {
  app.use('/auth/login', login);
};
