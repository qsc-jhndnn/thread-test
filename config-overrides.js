const { override, fixBabelImports } = require('customize-cra');
const ThreadsPlugin = require('threads-plugin');

 module.exports = function(config, env){
   config.plugins.push(new ThreadsPlugin())
   return config;
 }