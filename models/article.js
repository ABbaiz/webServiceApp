const sequelize  = require('../config/sequelize');
const Sequelize = require('sequelize');
module.exports = sequelize.define('article', {
       reference: {
           type: Sequelize.STRING,
           primaryKey: true,
       },
       designation: {
           type: Sequelize.STRING
       },
       type_fabrication_achat: {
           type: Sequelize.STRING
       },
       unite_achat_stock: {
        type: Sequelize.STRING
       },
       delai_en_semaine: {
        type: Sequelize.INTEGER(11)
       },
       prix_standard: {
        type: Sequelize.FLOAT
       },
       lot_reapprovisionnement: {
        type: Sequelize.INTEGER(11)
       },
       stock_mini: {
        type: Sequelize.INTEGER(11)
       },
       stock_maxi: {
        type: Sequelize.INTEGER(11)
       },
       pourcentage_de_perte: {
        type: Sequelize.FLOAT
       },
       inventaire: {
        type: Sequelize.INTEGER(11)
       },
       PF_ou_MP_ou_Piece_ou_SE: {
        type: Sequelize.STRING
       },
       stock: {
        type: Sequelize.STRING
       }

       
});
