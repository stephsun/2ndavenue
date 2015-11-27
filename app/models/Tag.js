"use strict";

import Sequelize from 'sequelize';

export default function (sequelize) {
  let Tag = sequelize.define('Tag', {
		name: Sequelize.STRING
	}, {
		//TODO: classmethods goes in here
	});

	return Tag;
};
