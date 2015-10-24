require.config({
    paths: {
        'angular': 'public/bower/angular/angular',
        'angular-route': 'public/bower/angular-route/angular-route',
        'angular-animate': 'public/bower/angular-animate/angular-animate',
        'angular-resource': 'public/bower/angular-resource/angular-resource',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-animate': ['angular'],
        'angular-resource': ['angular']
    }
});

require([
    'app',
    'angular',
    'angular-route',
    'angular-animate',
    'angular-resource'
], function (app) {
  // initialisation code defined within app.js
  app.init();
});
