/*===============*\
    Dependecias
\*===============*/

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade');

/*====| Archivos Sass |====*/

var sassSources = [
  'template/styles/style.scss'
]

/*====| Archivos Jade |====*/

var jadeSources = [
  'home/*.jade',
  '**/*.jade',
  '!template/*.jade'
]

/*====| Archivos Javascript |====*/

var jsSources = [
  'util/scripts/jquery-2.1.4.min.js',
  'util/scripts/jquery.bxslider.min.js',
  'util/scripts/hammer.min.js',
  'util/scripts/jquery.hammer.js',
  'util/scripts/picturefill.min.js',
  'util/scripts/handlebars-v4.0.5.js',
  '**/script.js',
  'util/scripts/plugins.js'
]





/*===============*\
    Tarea Sass
\*===============*/

gulp.task('css', function() {
  gulp.src(sassSources)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('../css'));
});




/*===============*\
    Tarea Jade
\*===============*/

gulp.task('html', function() {
  gulp.src(jadeSources)
    .pipe(jade({
      pretty:false
    }))
    .pipe(gulp.dest('../'));
});




/*===============*\
    Js task
\*===============*/

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('../js'));
});

/*======================*\
    Watching All tasks
\*======================*/

gulp.task('watch', function() {
  gulp.watch(sassSources, ['css']);
  gulp.watch(jadeSources, ['html']);
  gulp.watch(jsSources, ['js']);
});


/*======================*\
    Execute Task
\*======================*/

gulp.task('default',
  ['css', 'html', 'js', 'watch']);
