const root = require('./root');
const login = require('./login');

module.exports = app => {
  app.use('/', root);
  app.use('/login', login);
};
