const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("contest")
    },
    createUSER(createCONTEST) {
        return db("contest")
        .insert(createCONTEST)
        .returning("*")
    },
    deleteUSER(id) {
        return db("contest")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("contest").where("id", id)
    },
    updateUSER(id, CONTEST) {
        return db("contest")
          .where('id', id)
          .update(CONTEST)
          .returning('*')
      }
}