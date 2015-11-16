"use strict";

var Sequelize = require("sequelize");

module.exports = function (sequelize) {
  var Tag = sequelize.define('Tag', {
		name: Sequelize.STRING
	}, {
		//TODO: classmethods goes in here
	});

	return Tag;
};