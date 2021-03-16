const {src, dest} = require('gulp');
const backendPath = require('../config').localServerProjectPath;
const filesJs = require('../config').files.js;
const filesJsOrder = require('../config').files.js;
const order = require('gulp-order');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const fn = function (voornaam) {
return function () {

//console.log(`Taak js is uitgevoerd, ${voornaam}!`);
//return Promise.resolve('Klaar');

    return src(filesJs)
        .pipe(order(filesJsOrder, {base: './'}))
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(dest('./dist/js'))
        .pipe(dest(backendPath));

    }
};

exports.js = fn;
