# class-id-minifier

> gruntplugin for class-id-minifier

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

    ```shell
    npm install class-id-minifier --save-dev
    ```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

    ```js
    grunt.loadNpmTasks('class-id-minifier');
    ```

## The "class-id-minifier" task

### Overview
In your project's Gruntfile, add a section named `class-id-minifier` to the data object passed into `grunt.initConfig()`.

    ```js
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

#### options.scssMapFile
Type: `String`
Required.

A string value that is path of generated scss map file.

#### options.jsMapFile
Type: `String`
Required.

A string value that is path of generated js map file.

#### options.moduleName
Type: `String`
Optional.

A string value that is moduleName of generated js map file.

#### options.excludeReg.css
Type: `RegExp`
Required.

A RegExp value that specify css class name which should not be minified.

### Usage Examples


In this example, class name and id of html in tests/fixtures will be minified,
mapped scss, mapped js and modified html will be saved to tests/expect.

note: id and class name which starts with J_ will not be modified.

    ```js
    grunt.initConfig({
      class-id-minifier: {
        simple: {
            options: {
                scssMapFile: 'tmp/simple/map.scss',
                jsMapFile: 'tmp/simple/map.js',
                excludeReg: {
                    id: /^J_/,
                    css: /^J_/
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
        }
      }
    })
    ```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### 0.1.0

- initila commit
