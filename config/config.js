var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'stocktracker'
        },
        port: 3000,
        db: 'mongodb://localhost/stocktracker-development'
    },

    test: {
        root: rootPath,
        app: {
            name: 'stocktracker'
        },
        port: 3000,
        db: 'mongodb://localhost/stocktracker-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'stocktracker'
        },
        port: 3000,
        db: 'mongodb://localhost/stocktracker-production'
    }
};

module.exports = config[env];
