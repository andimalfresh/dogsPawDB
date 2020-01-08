const express = require("express")
const router = express.Router()
const queries = require("./queries_USERS.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(USERS => res.status(200).send(USERS))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(USERS => res.status(200).send(USERS))
    })
    router.post("/", (req, res, next) => {
        queries.createUSER(req.body).then(USERS => res.status(201).send(USERS))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteUSER(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateUSER(req.params.id, req.body).then(USERS => res.json(USERS))
    })   

    module.exports = router