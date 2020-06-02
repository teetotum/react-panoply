const path = require('path');
//const package = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-panoply.js',
    library: 'reactPanoply',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: ['react', 'cookies-js'],
  //externals: Object.keys(package.dependencies),
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
