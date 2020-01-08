
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          pet_name: 'NastyDog',
          pet_user: 1,
          pet_type: 'Dog',
          pet_gender: 'Male',
          pet_breed: 'Weiner Dog',
          pet_about: 'This dog isnt that cool',
          pet_age: '56',
          pet_picture_url: 'https://thehappypuppysite.com/wp-content/uploads/2018/12/fat-dachshund-long-1024x555.jpg'
        },
        {
          id: 2,
          pet_name: 'Polly',
          pet_user: 3,
          pet_type: 'Bird',
          pet_gender: 'Female',
          pet_breed: 'Shepard',
          pet_about: 'This parrot once bit off an old mans ear at Round Table Pizza, my favorite pizza joint in Oakland. Best bring a change of clothes cuz you cant wear your silk robe in.',
          pet_age: '11',
          pet_picture_url: 'http://www.itattoodesigns.com/images/articles/parrot/parrot.jpg'
        },              
        {
          id: 3,
          pet_name: 'Black Jack',
          pet_user: 2,
          pet_type: 'Cat',
          pet_gender: 'Male',
          pet_breed: 'regular house cat',
          pet_about: 'Black Jacks full name IRL is William Black Jack Pedersen',
          pet_age: '56',
          pet_picture_url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwivzbLH9_TmAhXYpZ4KHYpyAvQQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.thesprucepets.com%2Ffacts-about-black-cats-554102&psig=AOvVaw1WaOzQs0C-a3SlZDqb2IpB&ust=1578604873479109'
        },
      ]);
    });
};
