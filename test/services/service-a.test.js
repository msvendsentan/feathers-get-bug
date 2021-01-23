const app = require('../../src/app');

describe('\'serviceA\' service', () => {
  it('registered the service', () => {
    const service = app.service('service-a');
    expect(service).toBeTruthy();
  });
});
