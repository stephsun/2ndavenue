"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var Brand = sequelize.define('Brand', {
        name: Sequelize.STRING,
        uri: Sequelize.STRING
    });

    return Brand;
};
