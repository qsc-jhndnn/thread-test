const ThreadsPlugin = require('threads-plugin');

 module.exports = function override(config, env){
   config.plugins.push(new ThreadsPlugin())
   return config;
 }