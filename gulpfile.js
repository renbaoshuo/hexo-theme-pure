const gulp = require('gulp');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const header = require('gulp-header');
const pkg = require('./package.json');


const jsBanner = [
    '/*! Hexo Theme Pure v<%= pkg.version %>',
    '<%= filename %>',
    'Baoshuo ( https://baoshuo.ren )',
    '<%= pkg.license %> License */\n',
].join(' | ');

const cssBanner = [
    '/*! Hexo Theme Pure v<%= pkg.version %>',
    '<%= filename %>',
    'Baoshuo ( https://baoshuo.ren )',
    '<%= pkg.license %> License */\n',
].join(' | ');

const browserslist = [
    'last 3 versions',
    'since 2016',
    '> 1%',
    'Chrome >= 49',
    'Firefox >= 50',
    'ie >= 11',
    'Safari >= 9',
]

const configs = {
    autoprefixer: {
        overrideBrowserslist: browserslist
    },
    cleanCSS: {
        sourceMap: true,
        compatibility: 'ie11'
    },
};

gulp.task('minify-js', () => gulp.src('src/**/*.js')
    .pipe(babel({
        'presets': [
            ['@babel/env', {
                'targets': browserslist,
                'loose': true
            }]
        ]
    }))
    .pipe(uglify({
        keep_fnames: false
    }))
    .pipe(header(jsBanner, { pkg }))
    .pipe(gulp.dest('dist')));

gulp.task('minify-css', () => gulp.src('source/styles/**/*.css')
    .pipe(autoprefixer(configs.autoprefixer))
    .pipe(cleanCSS(configs.cleanCSS))
    .pipe(header(cssBanner, { pkg }))
    .pipe(gulp.dest('dist')));

gulp.task('minify-less', () => gulp.src(['source/styles/**/*.less', '!source/styles/**/_*/**.less'])
    .pipe(less())
    .pipe(autoprefixer(configs.autoprefixer))
    .pipe(cleanCSS(configs.cleanCSS))
    .pipe(header(cssBanner, { pkg }))
    .pipe(gulp.dest('dist')));

gulp.task('build', gulp.parallel('minify-js', 'minify-css', 'minify-less'));

gulp.task('default', gulp.parallel('build'));
