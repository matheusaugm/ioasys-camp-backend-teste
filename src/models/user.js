const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database/sequelize');

class User extends Model {

};
User.init({

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    field: "is_admin",
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at",
  },
},
  {
    sequelize: new Sequelize(config),
    modelName: 'User',
    underscored: true,
    tableName: 'users',
    paranoid: true,
  },
);

User.beforeSave(async (user, options) => {
  const password = await encryptor.hashPassword(user.password);
  if (user.changed("password")) {
    Object.assign(user, { password });
  }
  return user;
});

User.prototype.toJSON = function () {
  const user = { ...this.get() };
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !["password"].includes(key))
  );
};

module.exports = User;