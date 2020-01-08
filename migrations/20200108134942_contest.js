exports.up = function(knex, Promise) {
    return knex.schema.createTable("contest", (contest) => {
      contest.increments("id")
      contest.string("name")
      contest.string("start_date")
      contest.string("end_date")
      contest.string("prizes")
      contest.string("rules")
      contest.boolean("contest_active")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("contest")
  }
