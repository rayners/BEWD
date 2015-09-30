'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define('UserInfo', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserInfo;
};