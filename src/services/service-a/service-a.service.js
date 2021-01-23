// Initializes the `serviceA` service on path `/service-a`
const { ServiceA } = require('./service-a.class');
const createModel = require('../../models/service-a.model');
const hooks = require('./service-a.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/service-a', new ServiceA(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('service-a');

  service.hooks(hooks);
};
