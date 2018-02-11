module.exports = function(sequelize, Sequelize) {

    var Tour = sequelize.define('tour', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: Sequelize.STRING,
            allowNull: false
        },

        zipcode: {
            type: Sequelize.INTEGER,
            validate: { min: -90, max: 90 }
        },

        category: {
            type: Sequelize.STRING
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false
        },

        price: {
            type: Sequelize.INTEGER
        },

        photo: {
            type: Sequelize.STRING
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
    }, {
        timestamps: true,
    });

    return Tour;

}