const Router = require('koa-router');

export default db.define('Persons', {
    : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'test101',
    timestamp: false
  })