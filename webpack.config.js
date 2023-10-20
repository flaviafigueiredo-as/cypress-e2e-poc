const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      helpers: path.resolve(__dirname, './helpers'),
      utils: path.resolve(__dirname, './utils'),
      'http-client': path.resolve(__dirname, './http-client'),
      fixtures: path.resolve(__dirname, './fixtures'),
    },
  },
  node: { fs: 'empty', child_process: 'empty', readline: 'empty' },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: { enabled: true, files: './cypress/**/*.{ts,tsx,js,jsx}' },
    }),
  ],
};