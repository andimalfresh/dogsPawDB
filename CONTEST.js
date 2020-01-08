const express = require("express")
const router = express.Router()
const queries = require("./queries_CONTEST.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(CONTEST => res.status(200).send(CONTEST))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(CONTEST => res.status(200).send(CONTEST))
    })
    router.post("/", (req, res, next) => {
        queries.createCONTEST(req.body).then(CONTEST => res.status(201).send(CONTEST))
    })
    router.delete("/:id", (req, res) => {
        queries.deleteCONTEST(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updateCONTEST(req.params.id, req.body).then(CONTEST => res.json(CONTEST))
    })   

    module.exports = router