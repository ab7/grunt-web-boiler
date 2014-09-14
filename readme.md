# Grunt Web Boilerplate

This is a basic frontend boiler I use when starting new projects. It features [Sass](http://sass-lang.com/) for css pre-proccessing and [Grunt](http://gruntjs.com/) to automate css and javascript compiling and minification. Currently the default `grunt` task monitors the static directory and re-compiles whenever a file is changed.


## Getting Started

1. You will need to have `npm` installed on your system. `npm` is the package manager for [node.js](http://nodejs.org/), it installs automatically with node. They have pre-compiled binaries availble for easy installation so check it out if you don't already have node installed.

2. If this the first time you're running grunt, you will need to install the global command line interface.

        npm install -g grunt-cli

3. After renaming the directory to your new project name, you can fill out the info in the `package.json` file. `npm` will complain if you don't, but everything should still work.

4. Next navigate to to root directory of the project and run:

        npm install

    This will install all the grunt dependencies into a directory called `node_modules`.

5. Now run `grunt` and you are all set to go!

## Default Tasks

#### Sass
* Compiles Sass files into a single expanded CSS file.
* https://github.com/gruntjs/grunt-contrib-sass

#### CSSmin
* Compresses prefixed CSS file.
* https://github.com/gruntjs/grunt-contrib-cssmin

#### Auto-prefixer
* Adds any required css prefixes based on the [Can I use](http://caniuse.com/) database.
* https://github.com/nDmitry/grunt-autoprefixer

#### Concatenate
* Combines all javascript files in the js directory into a single, built file.
* https://github.com/gruntjs/grunt-contrib-concat

#### Uglify
* Compresses built javascript file.
* https://github.com/gruntjs/grunt-contrib-uglify

#### Watch
* Watches for changes in the static directory and re-compiles on file change.
* https://github.com/gruntjs/grunt-contrib-watch
