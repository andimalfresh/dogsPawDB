
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Bill Walsh',
          email: 'getfornited@gmail.com',
          password: 'deezdogs', votes_submitted: false
          },
        {
          id: 2,
          name: 'Tammy Drozenburger',
          email: 'whomakesthesenames@gmail.com',
          password: 'ilikeplumbers',
          votes_submitted: false
        },
        {
          id: 3,
          name: 'Cash Blingband', 
          email: 'coolkidrollerblade@gmail.com', 
          password: 'grindallday', 
          votes_submitted: true
        }
      ]);
    });
};
