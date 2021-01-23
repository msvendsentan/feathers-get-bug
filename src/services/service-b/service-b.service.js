// Initializes the `serviceB` service on path `/service-b`
const { ServiceB } = require('./service-b.class');
const createModel = require('../../models/service-b.model');
const hooks = require('./service-b.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/service-b', new ServiceB(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('service-b');

  service.hooks(hooks);
};
