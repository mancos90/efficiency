var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'efficiency'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/efficiency-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'efficiency'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/efficiency-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'efficiency'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/efficiency-production'
  }
};

module.exports = config[env];
