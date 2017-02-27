'use strict';

const SwaggerConnect = require('swagger-connect');
const app = require('connect')();
module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerConnect.create(config, function (err, swaggerConnect) {
  if (err) {
    throw err;
  }
  swaggerConnect.register(app);

  app.listen(process.env.PORT || 10010);

  Object.keys(swaggerConnect.runner.swagger.paths)
    .map(k=>{console.info(`${Object.keys(swaggerConnect.runner.swagger.paths[k]).map(x=>x.toUpperCase())}: ${k}`)})
});
