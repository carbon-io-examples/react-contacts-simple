const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, 'src/js/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: { presets: ['stage-0', 'env', 'react'] }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      CONTACTS_API_URI: 'http://localhost:9900'
    })
  ]
};