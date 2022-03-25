import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(path.resolve(), 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(path.resolve(), 'dist'),
    },
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
