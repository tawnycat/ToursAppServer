module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstName {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastName {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        }
    });

    return User;

}