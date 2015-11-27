"use strict";

import Sequelize from 'sequelize';

export default (sequelize) => {
    var Brand = sequelize.define('Brand', {
        name: Sequelize.STRING,
        uri: Sequelize.STRING
    });

    return Brand;
};
