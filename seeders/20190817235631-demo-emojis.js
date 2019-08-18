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
   return queryInterface.bulkInsert('emojis', [{
    emoji: -4,
    comment: 'Because it isn’t really about your desired action but the underlying emotion that drives that action. If you get them to feel that emotion, you GOT ‘em.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: -3,
    comment: 'The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: -2,
    comment: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: -1,
    comment: 'Don’t Let Yesterday Take Up Too Much Of Today.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: 0,
    comment: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: 1,
    comment: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: 2,
    comment: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: 3,
    comment: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    emoji: 4,
    comment: 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('emojis', null, {});
  }
};
