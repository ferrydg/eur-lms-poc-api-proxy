var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');

gulp.task('dev', function() {
    env({
        file: '.devenv.json'
    });

    nodemon({
        script: 'server-local.js',
        ext: 'js html'
    });
});
