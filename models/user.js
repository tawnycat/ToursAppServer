module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        createdAt: {
            type: Sequelize.DATE,
            field: 'beginTime',
            defaultValue: sequelize.literal('NOW()')
        },

        updatedAt: {
            type: Sequelize.DATE,
            field: 'beginTime',
            defaultValue: sequelize.literal('NOW()')
        }
    },
    {
        timestamps: true,
    });

    return User;
}