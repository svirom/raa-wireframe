var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'app'
    },
    port: 8080,
    notify: false
  });
});

gulp.task('sass', () => {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', sass.logError)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src('app/js/**/*.js')
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', (done) => {
  gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('app/js/**/*.js', gulp.series('js'));
  gulp.watch('app/**/*.html', gulp.series('html'));
  done();
})));

