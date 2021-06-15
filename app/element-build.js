const fs = require('fs');

const workingDir = __dirname + '\\dist\\';

const indexHtml = workingDir + 'indexbkp.html';
const jsBundle = workingDir + 'bundle.js';
const cssBundle = workingDir + 'bundle.css';

const jsfiles = [
    workingDir + 'runtime-es5.js',
    workingDir + 'runtime-es2015.js',
    workingDir + 'polyfills-es5.js',
    workingDir + 'polyfills-es2015.js',
    workingDir + 'main-es2015.js',
    workingDir + 'main-es5.js',
];
const cssfiles = [
    workingDir + 'styles.css',
];

let jsContent = '';
jsfiles.forEach(pathToFile => {
    jsContent += fs.readFileSync(pathToFile);
});

let cssContent = '';
cssfiles.forEach(pathToFile => {
    cssContent += fs.readFileSync(pathToFile);
});

//fs.readdirSync(workingDir).forEach(x => fs.unlinkSync(workingDir + x));

fs.writeFileSync(jsBundle, jsContent);
fs.writeFileSync(cssBundle, cssContent);
fs.writeFileSync(indexHtml, `
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="bundle.css">
    </head>
    <body>
        <app-root></app-root>
        <script src="bundle.js" type="module"></script>
    </body>
</html>`);