'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user_emojis', [
      {
        user_id: 1,
        emoji_id: 2
      },
      {
        user_id: 1,
        emoji_id: 3
      },
      {
        user_id: 1,
        emoji_id: 5
      },
      {
        user_id: 2,
        emoji_id: 2
      },
      {
        user_id: 2,
        emoji_id: 3
      },
      {
        user_id: 2,
        emoji_id: 5
      },
      {
        user_id: 3,
        emoji_id: 2
      },
      {
        user_id: 3,
        emoji_id: 3
      },
      {
        user_id: 3,
        emoji_id: 5
      },{
        user_id: 4,
        emoji_id: 2
      },
      {
        user_id: 4,
        emoji_id: 3
      },
      {
        user_id: 4,
        emoji_id: 5
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('user_emojis', null, {});
  }
};
