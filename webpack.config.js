/**
 * Webpack: Compiles the app
 *
 */

const path = require('path');
const webpack = require('webpack');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.tsx',
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
  ],
  devServer: {
    contentBase: outPath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  devtool: 'cheap-module-eval-source-map',
};
