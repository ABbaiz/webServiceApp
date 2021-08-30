const sequelize  = require('../config/sequelize');
const Sequelize = require('sequelize');
module.exports = sequelize.define('operation', {
       numero_operation: {
           type: Sequelize.INTEGER,
           autoIncrement: true,
           primaryKey: true,
       },
       temps_preparation: {
           type: Sequelize.FLOAT
       },
       temps_execution: {
            type: Sequelize.FLOAT
       },
       temps_transfert: {
            type: Sequelize.FLOAT
       },
       libelle_operation: {
            type: Sequelize.INTEGER
       },
       article: {
            type: Sequelize.STRING,
            required:true
       },
       postCharge: {
            type: Sequelize.INTEGER,
            required:true
       },
        
});

