"use strict";

var url = require('url');

var Sequelize = require("sequelize");
var dbConnectionOptions = getDBConnectionOptions(process.env.DATABASE_URL)
var sequelize = new Sequelize(
    dbConnectionOptions.database,
    dbConnectionOptions.username,
    dbConnectionOptions.password,
    dbConnectionOptions.options
);

var Brand = require('./Brand')(sequelize);
var Tag = require('./Tag')(sequelize);
var BrandTag = require('./BrandTag')(sequelize, {
  Brand: Brand,
  Tag: Tag
});

// TODO: move this into utility
function getDBConnectionOptions (postgresUrl) {
    if (!postgresUrl) {
        throw new Error('postgres URI is empty');
    }

    var urlParts = url.parse(postgresUrl, true);
    var username, password, database, host, port;
    var options = urlParts.query || {};

    if (urlParts.pathname) {
        database = urlParts.pathname.replace(/^\//, '');
    }

    if (urlParts.auth) {
        username = urlParts.auth.split(':')[0];
        password = urlParts.auth.split(':')[1];
    }

    options.ssl = !!options.ssl
    // HACK: to make sequelize work with ssl connection
    options.dialectOptions = {
        ssl: options.ssl
    };
    options.dialect = urlParts.protocol.replace(/:$/, '');
    options.host = urlParts.hostname;
    if (urlParts.port) {
        options.port = urlParts.port;
    }

    return {
        username: username,
        password: password,
        database: database,
        options: options
    };
};

module.exports = {
  Brand: Brand,
  Tag: Tag,
  BrandTag: BrandTag,
  sequelize: sequelize
};
