const serviceA = require('./service-a/service-a.service.js');
const serviceB = require('./service-b/service-b.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(serviceA);
  app.configure(serviceB);
};
