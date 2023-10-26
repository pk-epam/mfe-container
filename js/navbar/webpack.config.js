const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: '3002'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "navbar",
      filename: "remoteEntry.js",
      exposes: {
        "./NavBarIndex": "./src/index"
      }
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ]
}