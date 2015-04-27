var concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    LessPluginAutoPrefixer = require('less-plugin-autoprefix'),
    autoprefixer = new LessPluginAutoPrefixer({ browsers: ['last 2 versions']}),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    server = require('gulp-server-livereload'),
    uglify = require('gulp-uglify'),
    wiredep = require('wiredep');

// Clean generated assets
gulp.task('clean', function() {
    del(['src/assets/*']);
});

// Wire dependencies
gulp.task('wiredep', function() {
    wiredep({ src: 'src/*.html', dest: 'src/*.html'});
});

// Handle JS build
gulp.task('script', function () {
    console.log('building the scripts...');
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('src/assets'));
});

// Handle CSS build
gulp.task('style', function () {
    console.log('building the styles...');

    return gulp.src('src/less/*.less')
        .pipe(plumber())
        .pipe(less({
            plugins: [autoprefixer]
        }))
        .pipe(minifyCss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('src/assets'));
});

// Web server
gulp.task('serve', function() {
    gulp.src('src')
        .pipe(server({
            liveReload: false,
            open: true
        }));
});

// Watch for changes while developing
gulp.task('watch', function() {
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch('src/less/*.less', ['style']);
    gulp.watch('src/js/*.js', ['script']);
});

gulp.task('default', ['clean', 'script', 'style', 'wiredep']);