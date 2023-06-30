const Sequelize = require('sequelize');
const database = require('../db');
const Pessoa = require('./Pessoa');


const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Pessoa,
            key: 'id'
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Usuario;
