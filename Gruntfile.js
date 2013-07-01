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
                    scssMapFile: 'tmp/simple/map.scss',
                    jsMapFile: 'tmp/simple/map.js',
                    excludeReg: {
                        id: /J_/,
                        css: /J_/
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'test/fixtures/simple/',
                        src: '*.html',
                        dest: 'tmp/simple/'
                    }
                ]
            },
            module: {
                options: {
                    scssMapFile: 'tmp/module/map.scss',
                    jsMapFile: 'tmp/module/map.js',
                    moduleName:'',
                    excludeReg: {
                        id: /J_/,
                        css: /J_/
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: 'test/fixtures/module/',
                        src: '*.html',
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
