'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.class_id_minifier = {
    simple: {
        'mapJs': function (test) {

            var actual = grunt.file.read('tmp/simple/map.js');
            var expected = grunt.file.read('test/expected/simple/map.js');
            test.equal(actual, expected);

            test.done();
        },

        'mapDevJs': function (test) {

            var actual = grunt.file.read('tmp/simple/map.dev.js');
            var expected = grunt.file.read('test/expected/simple/map.dev.js');
            test.equal(actual, expected);

            test.done();
        },

        'mapHtml': function (test) {

            var actual = grunt.file.read('tmp/simple/test.html');
            var expected = grunt.file.read('test/expected/simple/test.html');
            test.equal(actual, expected);

            test.done();
        },

        'mapHtml2': function (test) {

            var actual = grunt.file.read('tmp/simple/test2.html');
            var expected = grunt.file.read('test/expected/simple/test2.html');
            test.equal(actual, expected);

            test.done();
        }
    },
    module: {
        'mapJs': function (test) {

            var actual = grunt.file.read('tmp/module/map.js');
            var expected = grunt.file.read('test/expected/module/map.js');
            test.equal(actual, expected);

            test.done();
        },

        'mapDevJs': function (test) {

            var actual = grunt.file.read('tmp/module/map.dev.js');
            var expected = grunt.file.read('test/expected/module/map.dev.js');
            test.equal(actual, expected);

            test.done();
        },

        'mapHtml': function (test) {

            var actual = grunt.file.read('tmp/module/test.html');
            var expected = grunt.file.read('test/expected/module/test.html');
            test.equal(actual, expected);

            test.done();
        },

        'mapHtml2': function (test) {

            var actual = grunt.file.read('tmp/module/test2.html');
            var expected = grunt.file.read('test/expected/module/test2.html');
            test.equal(actual, expected);

            test.done();
        }
    }

};
