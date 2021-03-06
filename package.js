Package.describe({
    name: 'jschmidt:raptorize',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Unleash a Raptor on your site',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/jared-schmidt/meteor-raptorize',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use(["jquery"], "client");
    api.addFiles([
        'Raptorize-Kit/raptor.png',
        // 'Raptorize-Kit/raptor-sound.mp3',
        // 'Raptorize-Kit/raptor-sound.ogg',
        'raptorize.js'
    ], 'client');
    api.export('Raptorize');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('jschmidt:raptorize');
    api.addFiles('raptorize-tests.js');
});
