const app = require('../../src/app');

describe('\'serviceB\' service', () => {
  it('registered the service', () => {
    const service = app.service('service-b');
    expect(service).toBeTruthy();
  });
});
