const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: '3003'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./FooterIndex": "./src/index"
      }
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ]
}