const sequelize  = require('../config/sequelize');
const Sequelize = require('sequelize');
module.exports = sequelize.define('stock', {
      nmbr_magasin: {
           type: Sequelize.STRING,
           primaryKey: true,
       },
       quantity: {
           type: Sequelize.INTEGER
       },
       periode: {
           type: Sequelize.STRING
       },
       stock_type: {
        type: Sequelize.STRING
       }, 
});



