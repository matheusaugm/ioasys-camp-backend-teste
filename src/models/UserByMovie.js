const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database/sequelize');

const User = require('./book');
const movie = require('./user');

class UserByBook extends Model {}
UserbyMovie.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Book,
        key: 'id',
      },
    },
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'UserByMovie',
    underscored: true,
    paranoid: true,
    tableName: 'user_by_movies',
  },
);

module.exports = UserByMovie;