const gulp = require('gulp');
const scss = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
const concat_css = require('gulp-concat-css');
const minify_css = require('gulp-minify-css');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const CleanCSS = require('clean-css');
const purgecss = require('gulp-purgecss');


gulp.task('css-vendor', function () {
    return gulp.src([])
        .pipe(concat_css('vendor.css'))
        .pipe(minify_css({keepSpecialComments: false}))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({
            message: 'css-vendor success'
        }));
});
gulp.task('images', function () {
    return gulp.src('assets/src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'));
});


gulp.task('scripts', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/owl.carousel/dist/owl.carousel.js',
        'node_modules/object-fit-images/dist/ofi.js',
    ])
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))

        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe(notify({
            message: 'js success'
        }));


});
gulp.task('scss', function () {
    return gulp.src('assets/src/scss/style.scss')

        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(autoprefix({
            browsers: [
                "> 0.1%",
                'last 2 version',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'safari 5',
                'ie 8',
                'ie 9',
                'IE 10',
                'IE 11',
                'opera 12.1',
                'ios 6',
                'android 4'
            ],
            cascade: false
        }))
        // .pipe(CleanCSS({compatibility: 'ie8'}))
        // .pipe(purgecss({
        //     content: [
        //         '*.php',
        //         'include/*.php',
        //         'assets/js/*.js',
        //     ]
        // }))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({
            message: 'scss success'
        }));
});

gulp.task('scss:watch', function () {
    gulp.watch('assets/src/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['scripts', 'scss']);
