'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const reporter = require("postcss-reporter");
const stylelint = require("stylelint");

gulp.task('lint:less', function () {
  return gulp.src('style.less')
    .pipe(postcss([
        stylelint(),
        reporter({clearMessages: true})
    ]));
});
