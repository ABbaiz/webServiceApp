const sequelize  = require('../config/sequelize');
const Sequelize = require('sequelize');
module.exports = sequelize.define('post_charge', {
        numero_section: {
           type: Sequelize.INTEGER,
           autoIncrement: true,
           primaryKey: true,
       },
       numero_sous_section: {
            type: Sequelize.FLOAT
       },
       machine: {
            type: Sequelize.FLOAT
       },
       designation: {
            type: Sequelize.STRING
       },
       taux_horaire_ou_forfait: {
            type: Sequelize.FLOAT
       },
       nombre_de_postes: {
            type: Sequelize.FLOAT
       },
       capacite_nominale: {
            type: Sequelize.FLOAT
       },
       type_taux_horaire_ou_forfait: {
            type: Sequelize.STRING
       },
       
});


