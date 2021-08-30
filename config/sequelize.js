const Sequelize = require('sequelize');
const db = 
module.exports = new Sequelize('db_geston', 'root', '', {
 host: 'localhost',
 port:   '3306',
 dialect: 'mysql',
});
