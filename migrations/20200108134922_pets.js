
exports.up = function(knex, Promise) {
    return knex.schema.createTable("pet_info", (pets) => {
        pets.increments("id")
        pets.string("pet_name")
        pets.integer("pet_user").references("id").inTable("users").onDelete("CASCADE")
        pets.string("pet_type")
        pets.string("pet_gender")
        pets.string("pet_breed")
        pets.string("pet_about", 500)
        pets.string("pet_age")
        pets.string("pet_picture_url", 500)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("pet_info", (pets) => {
  
    })
  };