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

  //  const user_ids = await queryInterface.sequelize.query(`SELECT id from users;`);
  //  console.log(user_ids);
  //  return false;

  //  return queryInterface.bulkInsert('user-emojis', [{
  //     user_id: user_id,
  //     emoji_id: emoji_id
  //   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('user-emojis', null, {});
  }
};
