'use strict';
module.exports = (sequelize, DataTypes) => {
  const emojis = sequelize.define('emojis', {
    emoji: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  }, {});
  emojis.associate = function(models) {
    // associations can be defined here
    // We're saying that a Emoji should belong to an User
    // A Emoji can't be created without an User due to the foreign key constraint
    emojis.belongsToMany(models.users, {
      through: 'user_emojis',
      as: 'user_emojis',
      foreignKey: 'emoji_id'
    });
  };
  return emojis;
};