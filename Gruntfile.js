'use strict';

var fs = require('fs');
var _ = require('lodash');

require('babel-polyfill');

module.exports = function (grunt) {
    var loadConfig = function (configPath) {
        var files = fs.readdirSync(configPath);
        return _.reduce(files, function (config, file) {
            var key = file.replace(/\.js$/, '');
            config[key] = require(configPath + '/' + key);
            return config;
        }, {});
    };

    require('load-grunt-tasks')(grunt);
    // load custom grunt tasks
    grunt.loadTasks('./grunt/tasks');

    var config = loadConfig('./grunt/configs');
    grunt.initConfig(config);

    grunt.registerTask('default', [
        'env',
        'babel',
        'launch',
        'watch'
    ]);
};
