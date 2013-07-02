/*
 * class-id-minifier
 * https://github.com/yiminghe/grunt-class-id-minifier
 *
 * Copyright (c) 2013 yiminghe
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Before generating any new files, remove any previously-created files.
        clean: {
           tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        'class-id-minifier': {
            simple: {
                options: {
                    jsMapFile: 'tmp/simple/map.js',
                    jsMapDevFile: 'tmp/simple/map.dev.js',
                    minifyFilter: function (k, type) {
                        // type.id type.className
                        // J_ ignored in minified html
                        return /^J_/.test(k) ? false : true;

                    },
                    jsMapFilter: function (k, type) {
                        // className ignored in js map
                        return !!type.id;
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'test/fixtures/simple/',
                        src: '*.{html,css}',
                        dest: 'tmp/simple/'
                    }
                ]
            },
            module: {
                options: {
                    jsMapFile: 'tmp/module/map.js',
                    jsMapDevFile: 'tmp/module/map.dev.js',
                    moduleName: '',
                    excludeReg: {
                        id: /J_/,
                        css: /J_/
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'test/fixtures/module/',
                        src: '*.{html,css}',
                        dest: 'tmp/module/'
                    }
                ]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*-test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'class-id-minifier', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test']);

};
