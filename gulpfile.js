'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const reporter = require("postcss-reporter");
const postcssLess = require("postcss-less");
const stylelint = require("stylelint");

gulp.task("lint:less", function () {
  return gulp.src("style.less")
    .pipe(postcss([
      stylelint({
        "rules": {
          "color-no-invalid-hex": true,
          "max-empty-lines": 2,
          "indentation": ["tab", {
            "except": ["value"]
          }]
        }
      }),
      reporter({ clearMessages: true }),
    ], {
      syntax: postcssLess.default
    }));
});
