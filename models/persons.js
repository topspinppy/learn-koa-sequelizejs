'use strict';
module.exports = (sequelize, DataTypes) => {
  var Persons = sequelize.define('Persons', {
    LastName: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Persons;
};