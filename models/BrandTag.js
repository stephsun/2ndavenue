"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize, data) {
	var BrandTag = sequelize.define('BrandTag', {
		rule: Sequelize.STRING
	});

	var Brand = data.Brand;
	var Tag = data.Tag;

	Brand.belongsToMany(Tag, { through: BrandTag });
	Tag.belongsToMany(Brand, { through: BrandTag });

	return BrandTag;
};