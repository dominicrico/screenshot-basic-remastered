const webpack = require('webpack')

module.exports = {
  entry: './src/server/server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  // https://github.com/felixge/node-formidable/issues/337#issuecomment-153408479
  plugins: [],
  optimization: {
    minimize: false
  },
  externals: ['commonjs hexoid', 'commonjs formidable'],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'server.js',
    path: __dirname + '/dist/'
  },
  node: {
    __dirname: true
  },
  target: 'node'
}
