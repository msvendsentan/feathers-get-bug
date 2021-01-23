const { Service } = require('feathers-objection');

exports.ServiceB = class ServiceB extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
