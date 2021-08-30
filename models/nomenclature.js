const sequelize  = require('../config/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('nomenclature', {
    compose: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    composant: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    quantite_de_composition: {
        type:  Sequelize.FLOAT
    }  
});

