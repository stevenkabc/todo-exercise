module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  debug: true,
  devtool: "#eval-source-map",
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
      { test: /\.json/, loader: 'json', exclude: [/node_modules/] } 
    ]
  }
}
