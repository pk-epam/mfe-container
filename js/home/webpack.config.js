const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: '1000'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        "navbar": "navbar@http://localhost:3002/remoteEntry.js",
        "footer": "footer@http://localhost:3003/remoteEntry.js"
      }
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ]
}