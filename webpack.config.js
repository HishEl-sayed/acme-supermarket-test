const path = require('path');

module.exports = {
  entry: './dst/basket',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
