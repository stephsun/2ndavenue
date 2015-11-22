'use strict';

var fs = require('fs');
var _ = require('lodash');

module.exports = function (grunt) {
    var loadConfig = function (configPath) {
        var files = fs.readdirSync(configPath);
        return _.reduce(files, function (config, file) {
            var key = file.replace(/\.js$/, '');
            config[key] = require(configPath + '/' + key);
            return config;
        }, {});
    };

    // load npm grunt tasks
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // load custom grunt tasks
    grunt.loadTasks('./grunt/tasks');

    var config = loadConfig('./grunt/configs');
    grunt.initConfig(config);

    grunt.registerTask('default', [
        'env',
        'launch',
        'watch'
    ]);
};
