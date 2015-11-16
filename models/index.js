"use strict";

var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres://localhost:5432/stephanie');

var Brand = require('./Brand')(sequelize);
var Tag = require('./Tag')(sequelize);
var BrandTag = require('./BrandTag')(sequelize, {
  Brand: Brand,
  Tag: Tag
});

module.exports = {
  Brand: Brand,
  Tag: Tag,
  BrandTag: BrandTag,
  sequelize: sequelize
};