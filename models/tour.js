module.exports = function(sequelize, Sequelize) {

    var Tour = sequelize.define('tour', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        title: {
            type: Sequelize.STRING,
            allowNull: false
        },

        location: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false
        },

        price: {
            type: Sequelize.INTEGER
        }
    });

    return Tour;

}