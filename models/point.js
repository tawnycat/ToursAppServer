module.exports = function(sequelize, Sequelize) {

    var Point = sequelize.define('point', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        title: {
            type: Sequelize.STRING,
            allowNull: false
        },

        coordinates: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Point;

}