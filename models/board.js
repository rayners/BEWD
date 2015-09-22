'use strict';
module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
      board: {
        type: DataTypes.STRING,
        get: function() {
            return this.getDataValue('board')
            .match(/.{3}/g)
            .map(function(row) {
                return row.split('');
            });
        },
        validate: {
    len: 9,
  //validates length property of field (expects string of exactly 9)
    is: {
        args: /^[XO ]+$/,
        //board string must be x's, o's, or spaces
        msg: 'Must be a valid tic tac toe board'
        //sequelize rejects it before it gets to the database if it doesn't pass
    }
}
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Board;
};
