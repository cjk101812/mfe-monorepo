const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['angular-app', 'http://localhost:4201/'],
    ['react-app', 'http://localhost:4202/remoteEntry.js'],
  ]
});
