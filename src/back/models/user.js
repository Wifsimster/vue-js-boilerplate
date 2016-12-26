var Sequelize = require('sequelize')
var sequelize = require('../db/database')

const User = sequelize.define('user', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
}, {
  freezeTableName: true,
})

module.exports = User