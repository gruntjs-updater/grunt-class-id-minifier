/*
 * class-id-minifier
 * https://github.com/yiminghe/grunt-class-id-minifier
 *
 * Copyright (c) 2013 yiminghe
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var defaultEncoding = 'utf-8';

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var classIdMinifier = require('class-id-minifier');


    grunt.registerMultiTask('class-id-minifier', 'minify class and id from html', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options();

        var classIdMap = {};

        var moduleName = options.moduleName;

        var scssMapFile = options.scssMapFile;
        var jsMapFile = options.jsMapFile;
        var encoding = options.encoding || defaultEncoding;

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            var src = f.src[0];
            var dest = f.dest;
            var srcContent = grunt.file.read(src, {
                encoding: encoding
            });
            var transformContent = classIdMinifier.
                minify(srcContent, classIdMap, options.minifyFilter);
            grunt.file.write(dest, transformContent.html, {
                encoding: encoding
            });
        });

        grunt.file.write(scssMapFile, classIdMinifier.getScssCode(classIdMap, options.scssMapFilter));
        grunt.file.write(jsMapFile, classIdMinifier.getJsCode(classIdMap, moduleName, options.jsMapFilter));

        grunt.file.write(options.scssDevMapFile, classIdMinifier.getDevScssCode(classIdMap));
        grunt.file.write(options.jsMapDevFile, classIdMinifier.getDevJsCode(classIdMap, moduleName));
    });

};
