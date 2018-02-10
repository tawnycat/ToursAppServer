module.exports = function(sequelize, Sequelize) {

    var Point = sequelize.define('point', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: Sequelize.STRING,
            allowNull: false
        },

        latitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
        },
        longitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false
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

    return Point;

}