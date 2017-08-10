'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['vue', 'element-ui', 'china-area-data']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].dll.js',
        //定义输出：window.${output.library}
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
          path: path.join(__dirname, './dist', '[name]-manifest.json'),
          // 和 output.library 一样即可
          name: '[name]_library'
      })
    ]
}