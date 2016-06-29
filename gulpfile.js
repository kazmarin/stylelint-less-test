'use strict';

const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

gulp.task('less:lint', function () {
  return gulp.src('style.less')
    .pipe(gulpStylelint({
      failAfterError: true,
      syntax: 'less',
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }));
});
