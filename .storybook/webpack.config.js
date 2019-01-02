const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (baseConfig, env, defaultConfig) {
  let sbRules = defaultConfig.module.rules;

  sbRules.splice(1, 1, {
    test: /\.less/,
    loader: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
          config: {
            path: 'postcss.config.js'
          }
        }
      },
      {
        loader: 'less-loader?relativeUrls',
        options: {
          javascriptEnabled: true
        }
      }
    ]
  },
  {
    test: /\.md$/,
    loader: 'file-loader',
    options: {}
  },
  {
    test: /\.css$/,
    loader: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader?relativeUrls',
        options: {
          importLoaders: 1,
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: 'postcss.config.js'
          },
          sourceMap: true
        }
      }
    ]
  });

  defaultConfig.plugins.push(
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.ExtendedAPIPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  );

  defaultConfig.optimization = {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ]
  };

  // Env setup for Enzyme
  defaultConfig.externals = {
    'jsdom': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  };

  return defaultConfig;
};
