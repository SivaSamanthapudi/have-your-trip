const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'trains-app',

  exposes: {
    './Component': './projects/trains-app/src/app/app.component.ts',
    './Module':'./projects/trains-app/src/app/trains/trains.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
