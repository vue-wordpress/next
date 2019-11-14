/*
Nuxt.js module for vue-wordpress
Usage:
    - Install vue-wordpress package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vue-wordpress/nuxt'
            // Optionally passing options in module configuration
            ['vue-wordpress/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VueWordpress: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.VueWordpress, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'vue-wordpress-plugin.template.js.tpl'),
    fileName: 'vue-wordpress-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
