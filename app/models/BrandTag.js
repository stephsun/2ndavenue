"use strict";

import Sequelize from 'sequelize';

export default (sequelize, data) => {
	let BrandTag = sequelize.define('BrandTag', {});

	let Brand = data.Brand;
	let Tag = data.Tag;

	Brand.belongsToMany(Tag, { through: BrandTag });
	Tag.belongsToMany(Brand, { through: BrandTag });

	return BrandTag;
};
