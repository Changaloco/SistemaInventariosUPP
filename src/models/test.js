const { Sequelize } = require("sequelize/types");

module.exports = (sequelize,type)=>{
    return sequelize.define('test',{
        id : {
            type: type.integer,
            primaryKey:true,
            autoIncrement:true
        },
        user : type.string,
        password : type.string,
        email: type.string
    })   
}