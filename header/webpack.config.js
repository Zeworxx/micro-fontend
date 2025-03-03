const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "header",
  filename: "remoteEntry.js",
  exposes: {
    "./HeaderComponent": "./src/app/header/header.component.ts",
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),
});
