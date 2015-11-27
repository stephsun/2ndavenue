"use strict";

import url from 'url';
import Sequelize from 'sequelize';

import BrandModel from './Brand';
import TagModel from './Tag';
import BrandTagModel from './BrandTag';

let { username, password, database, options } = getDBConnectionOptions(process.env.DATABASE_URL)
let sequelize = new Sequelize(database, username, password, options);

let Brand = BrandModel(sequelize);
let Tag = TagModel(sequelize);
let BrandTag = BrandTagModel(sequelize, {
    Brand: Brand,
    Tag: Tag
});

// TODO: move this into utility
function getDBConnectionOptions (postgresUrl) {
    if (!postgresUrl) {
        throw new Error('postgres URI is empty');
    }

    let urlParts = url.parse(postgresUrl, true);
    let username, password, database, host, port;
    let options = urlParts.query || {};

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
        username,
        password,
        database,
        options
    };
};

export {
    Brand,
    Tag,
    BrandTag,
    sequelize
};
