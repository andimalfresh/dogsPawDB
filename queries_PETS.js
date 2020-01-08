const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("pet_info")
    },
    createUSER(createPet) {
        return db("pet_info")
        .insert(createPet)
        .returning("*")
    },
    deleteUSER(id) {
        return db("pet_info")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("pet_info").where("id", id)
    },
    updateUSER(id, updatePet) {
        return db("pet_info")
          .where('id', id)
          .update(updatePet)
          .returning('*')
      }
}