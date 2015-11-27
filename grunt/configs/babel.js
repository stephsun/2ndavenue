'use strict';

module.exports = {
    options: {
        presets: ['es2015', 'react', 'stage-0']
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'app',
            src: ['**/*.js'],
            dest: 'dist',
            ext: '.js'
        }]
    }
};
