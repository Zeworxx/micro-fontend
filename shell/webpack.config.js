const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        header: 'header@http://localhost:4201/remoteEntry.js',
      },
      shared: ['@angular/core', '@angular/common']
    })
  ]
};