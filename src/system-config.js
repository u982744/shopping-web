/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router-deprecated',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app.component',
    'app/shared',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = {
        main: 'index',
        defaultExtension: 'js'
    };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'node_modules/@angular',
        '@angular/http': 'node_modules/@angular/http/index.js',
        '@angular/router-deprecated': 'node_modules/@angular/router-deprecated/index.js',
        '@angular/router': 'node_modules/@angular/router/index.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/index.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/index.js',
        '@angular/common': 'node_modules/@angular/common/index.js',
        '@angular/core': 'node_modules/@angular/core/index.js',
        '@angular/compiler': 'node_modules/@angular/compiler/index.js',
        //'rxjs': 'node_modules/rxjs/bundles/Rx.js',
        'rxjs/Rx': 'node_modules/rxjs/Rx.js',
        'rxjs': 'node_modules/rxjs',
        'rxjs/add/operator/do': 'node_modules/rxjs/add/operator/do',
        'rxjs/add/operator/map': 'node_modules/rxjs/add/operator/map',
        'main': 'main.js',
        'email-validator': 'node_modules/email-validator/index.js'
    },
    packages: {
        src: cliSystemConfigPackages,
        'app': {
            defaultExtension: "js"
        },
        'node_modules/rxjs': {
            defaultExtension: "js"
        },
        'node_modules/@angular/platform-browser-dynamic': {
            defaultExtension: "js"
        },
        'node_modules/@angular/platform-browser': {
            defaultExtension: "js"
        },
        'node_modules/@angular/common/src': {
            defaultExtension: "js"
        },
        'node_modules/@angular/core': {
            defaultExtension: "js"
        },
        'node_modules/@angular/compiler': {
            defaultExtension: "js"
        },
        'node_modules/@angular/http': {
            defaultExtension: "js"
        },
        'node_modules/@angular/router-deprecated': {
            defaultExtension: "js"
        },
        'node_modules/@angular/router': {
            defaultExtension: "js"
        }
    }
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map