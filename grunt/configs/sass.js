'use strict';

module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: 'app/static/stylesheets',
            src: ['*.scss'],
            dest: 'dist/static/stylesheets',
            ext: '.css'
        }]
    }
};
