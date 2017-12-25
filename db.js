const Sequelize = require('sequelize')

export const db = new Sequelize('test', 'root', '1234', {
  dialect: 'mysql',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 4444,
  pool: {
    maxConnections: 20,
    maxIdleTime: 30000
  },
  define: {
    timestamps: false
  }
})