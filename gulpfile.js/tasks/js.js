const {src, dest} = require('gulp');
const backendPath = require('../config').localServerProjectPath;

const fn = function (voornaam) {
return function () {

//console.log(`Taak js is uitgevoerd, ${voornaam}!`);
//return Promise.resolve('Klaar');

return src('js/*.js')
    .pipe(dest('dist'))
    .pipe(dest(backendPath))
    }
};
