const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './HeaderComponent': './src/app/header/header.component.ts',
      },
      shared: ['@angular/core', '@angular/common'],
    })
  ],
};