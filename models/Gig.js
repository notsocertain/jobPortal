const DataTypes = require('sequelize');
const db = require('../config/db');

const Gig = db.define('gig',{
    title :{
        type: DataTypes.STRING
    },
    technologies :{
        type: DataTypes.STRING
    },
    budget :{
        type: DataTypes.STRING
    },
    description :{
        type: DataTypes.STRING
    },
    contact :{
        type: DataTypes.STRING
    },
})

module.exports = Gig;