var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();

gulp.task("jshint", function() {
  return gulp.src("../pruszkowcowork.github.io/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "../pruszkowcowork.github.io"
    });

    gulp.watch("../pruszkowcowork.github.io/scss/**/*.scss", ['sass']);
    gulp.watch("../pruszkowcowork.github.io/*.html").on('change', browserSync.reload);
    gulp.watch("../pruszkowcowork.github.io/js/app.js").on('change', browserSync.reload);    
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("../pruszkowcowork.github.io/scss/style.scss")
        .pipe(sass({
          errLogToConsole: true,
          outputStyle: "expanded"
        }))
        .pipe(gulp.dest("../pruszkowcowork.github.io/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
