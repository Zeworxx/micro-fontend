module.exports = withModuleFederationPlugin({
  name: 'header',
  exposes: {
    './HeaderComponent': './src/app/header/header.component.ts', // Ce chemin doit être correct
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
});
