const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("users")
    },
    createUSER(createUSER) {
        return db("users")
        .insert(createUSER)
        .returning("*")
    },
    deleteUSER(id) {
        return db("users")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("users").where("id", id)
    },
    updateUSER(id, users) {
        return db("users")
          .where('id', id)
          .update(users)
          .returning('*')
      }
}