# grunt-class-id-minifier [![Build Status](https://secure.travis-ci.org/yiminghe/grunt-class-id-minifier.png?branch=master)](https://travis-ci.org/yiminghe/grunt-class-id-minifier)

> gruntplugin for grunt-class-id-minifier

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before,
be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide,
as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile)
as well as install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell

    npm install grunt-class-id-minifier --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js

    grunt.loadNpmTasks('grunt-class-id-minifier');
```

## The "class-id-minifier" task

### Overview
In your project's Gruntfile, add a section named `class-id-minifier` to the data object passed into `grunt.initConfig()`.

``` js

    grunt.initConfig({
      class-id-minifier: {
        options: {
          // Task-specific options go here.
        },
        your_target: {
          // Target-specific file lists and/or options go here.
        },
      },
    })
```

### Options

#### options.jsMapFile
Type: `String`
Required.

A string value that is path of generated js map file.

#### options.jsDevMapFile
Type: `String`
Required.

A string value that is path of generated js dev map file.

#### options.moduleName
Type: `String`
Optional.

A string value that is moduleName of generated js map file.

#### options.jsMapFilter
Type: `Function(name,type)`
Optional.

A function to filter whether name appears in js map file.

##### options.jsMapFilter.name
Type: `String`

original name of class or id

##### options.jsMapFilter.type.id
Type: `Boolean`

whether name is html id

##### options.jsMapFilter.type.className
Type: `Boolean`

whether name is html className

#### files

files of html and css files to be minified


### Usage Examples


In this example, class name and id of html in tests/fixtures will be minified,
mapped scss, mapped js and modified html will be saved to tests/expect.

note: id and class name which starts with J_ will not be modified.

```js

    grunt.initConfig({
      class-id-minifier: {
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
        }
      }
    })
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### 0.3.0

- remove scssMapFilter
- support minify css file

### 0.2.0

- support jsMapFilter/scssMapFilter/minifyFilter

### 0.1.0

- initila commit