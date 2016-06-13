var gulp = require('gulp');
var browserSync = require('browser-sync');
// var del = require('del');
// var glob = require('glob');
// var karma = require('karma').server;
// var merge = require('merge-stream');
// var paths = require('./gulp.config.json');
// var plato = require('plato');
var plug = require('gulp-load-plugins')();
var reload = browserSync.reload;

//var colors = plug.util.colors;
//var env = plug.util.env;
//var log = plug.util.log;
var port = process.env.PORT || 7203;




/**
 * Start the node server using nodemon.
 * Optionally start the node debugging.
 * @param  {Object} args - debugging arguments
 * @return {Stream}
 */
function serve(args) {
    var options = {
        //script: paths.server + 'app.js',
        script: './src/server/app.js',
        delayTime: 1,
        env: {
            'NODE_ENV': args.mode,
            'PORT': port
        },
        //watch: [paths.server]
        watch: ['./src/server/']
    };

    var exec;
    if (args.debug) {
        log('Running node-inspector. Browse to http://localhost:8080/debug?port=5858');
        exec = require('child_process').exec;
        exec('node-inspector');
        options.nodeArgs = [args.debug + '=5858'];
    }

    return plug.nodemon(options)
        .on('start', function() {
            startBrowserSync();
        })
        //.on('change', tasks)
        .on('restart', function() {
            log('restarted!');
            setTimeout(function () {
                browserSync.reload({ stream: false });
            }, 1000);
        });
}

/**
 * Start BrowserSync
 */
function startBrowserSync() {
    if(!env.browserSync || browserSync.active) {
        return;
    }

    log('Starting BrowserSync on port ' + port);
    browserSync({
        proxy: 'localhost:' + port,
        port: 3000,
        //files: [paths.client + '/**/*.*'],
        files: ['./src/client/**/*.*'],
        ghostMode: { // these are the defaults t,f,t,t
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 5000
    });
}

/**
 * serve the dev environment
 */
// gulp.task('serve-dev', function() {
gulp.task('default', function() {
    serve({
        mode: 'dev'
    });
});