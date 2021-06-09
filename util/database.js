const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sh@n2021', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
