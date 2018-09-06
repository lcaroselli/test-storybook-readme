/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')

module.exports = function WebpackConfig() {
  return {
    resolve: {
      extensions: ['.mjs', '.js', '.json', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react', 'es2015'],
                plugins: ['transform-class-properties']
            }
          },
        },
        {
          test: /\.css$/,
          use: 'raw-loader',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg)$/,
          use: 'file-loader',
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    // plugins: [
    // ].filter(plugin => plugin),
  }
}
