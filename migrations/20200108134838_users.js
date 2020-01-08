
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", (users) => {
      users.increments("id")
      users.string("name")
      users.string("email")
      users.string("password")
      users.boolean("votes_submitted")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users")
  }
