const { Service } = require('feathers-objection');

exports.ServiceA = class ServiceA extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
