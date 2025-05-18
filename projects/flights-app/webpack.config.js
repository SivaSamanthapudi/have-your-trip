const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'flights-app',

  exposes: {
    './Component': './projects/flights-app/src/app/app.component.ts',
    './Module':'./projects/flights-app/src/app/flights/flights.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
