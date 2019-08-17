'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    users.hasMany(models.emojis, {
      onDelete: "cascade"
    });
  };
  return users;
};