const { Model, Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database/sequelize');

class Movie extends Model {}
Movie.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cast: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'movie',
    underscored: true,
    tableName: 'movies',
    paranoid: true,
  },
);

module.exports = movie;
