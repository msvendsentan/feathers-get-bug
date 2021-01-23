// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    // Will go through
    const externalGet = await context.app.service('service-a').get(1);
    console.log('externalGet', externalGet);

    // Will go through, requires the 2nd argument to proxy optional 'params' argument
    const internalGet = await context.app.service('service-a')._get(1, '');
    console.log('internalGet', internalGet);

    // Throws error due to lack of optional 2nd argument?
    const internalGetErr = await context.app.service('service-a')._get(1);
    console.log('internalGetErr', internalGetErr);

    return context;
  };
};
