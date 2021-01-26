var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './app.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            [require('@babel/plugin-proposal-decorators'), { legacy: true }],
            '@babel/proposal-class-properties'
          ],
          presets: [
            ['@babel/preset-env',
              {
                targets: {
                  browsers: [
                    '>1%',
                    'not ie 11',
                    'not op_mini all'
                  ]
                }
              }]
          ]
        }
      }]
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devtool: 'source-map'
}
