const Sequelize = require('sequelize');

const sequelize = new Sequelize('testdb','pollenadmin','su!4you11aaAAaa',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;
