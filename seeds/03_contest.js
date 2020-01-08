
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contest').del()
    .then(function () {
      // Inserts seed entries
      return knex('contest').insert([
        {
          id: 1,
          name: 'First Contest EVER',
          start_date: 'tomorrow',
          end_date: 'next sunday',
          prizes: 'You win a hotdog from 7-11 thats been on the roller since 6am',
          rules: 'Just post a cool pic of your pet (and give us your email)',
          contest_active: true,
        },
        {
          id: 2,
          name: 'The Second Contest',
          start_date: 'Maybe next week',
          end_date: 'MLK Day',
          prizes: 'Just what everyone wants/needs a Yeti Tumbler',
          rules: 'Just post a cool pic of your pet (and give us your email)',
          contest_active: false,
        },
      ]);
    });
};
