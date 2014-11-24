# Grunt Web Boilerplate

This is a basic frontend boiler I use when starting new projects. It features [Sass](//sass-lang.com/) for css pre-proccessing and [Grunt](//gruntjs.com/) to automate css and javascript compiling and minification. There are two main tasks for development and production, `dev` and `pro`. The `dev` task simply monitors html, sass and js files for changes and reloads the browser. The `pro` task will prepare all files in a separate directory (`dist`) for production.


## Getting Started

1. You will need to have `npm` installed on your system. `npm` is the package manager for [node.js](//nodejs.org/), it installs automatically with node. They have pre-compiled binaries available for easy installation so check it out if you don't already have node installed.

2. If this the first time you're running grunt, you will need to install the global command line interface.

        npm install -g grunt-cli

3. After renaming the directory to your new project name, you can fill out the info in the `package.json` file. `npm` will complain if you don't, but everything should still work.

4. Next navigate to to root directory of the project and run:

        npm install

    This will install all the grunt dependencies into a directory called `node_modules`.

5. To have the browser automatically reload when you save changes you need to have [LiveReload](//livereload.com/). If you use chrome for development, you can use this [extension](//chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).


## Development Task

        grunt dev

#### Watch
* Watches for changes in the static directory and re-compiles on file change.
* https://github.com/gruntjs/grunt-contrib-watch

#### Sass
* Compiles Sass files into a single expanded CSS file.
* https://github.com/gruntjs/grunt-contrib-sass


## Production Task

        grunt pro

#### Concatenate
* Combines all javascript and css files.
* https://github.com/gruntjs/grunt-contrib-concat

#### Auto-prefixer
* Adds any required css prefixes based on the [Can I use](//caniuse.com/) database.
* https://github.com/nDmitry/grunt-autoprefixer

#### CSSmin
* Compresses combined CSS file.
* https://github.com/gruntjs/grunt-contrib-cssmin

#### Uglify
* Compresses combined javascript file.
* https://github.com/gruntjs/grunt-contrib-uglify

#### Copy
* Copies images folder to production directory if any files exist.
* https://github.com/gruntjs/grunt-contrib-copy

#### Process HTML
* Combines all link and script elements into single element.
* https://github.com/dciccale/grunt-processhtml

#### CheckJS
* Custom task I wrote to check and delete final js file and remove script element from index.html if the file is empty.
