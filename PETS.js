const express = require("express")
const router = express.Router()
const queries = require("./queries_PETS.js")


    
    router.get("/", (req,res) => {
       queries.listAll().then(PETS => res.status(200).send(PETS))
    })
    router.get("/:id", (req,res) => {
        queries.getById(req.params.id).then(PETS => res.status(200).send(PETS))
    })
    router.post("/", (req, res, next) => {
        queries.createPETS(req.body).then(PETS => res.status(201).send(PETS))
    })
    router.delete("/:id", (req, res) => {
        queries.deletePETS(req.params.id).then(res.sendStatus(204))
    })
    router.put("/:id", (req, res) => {
        queries.updatePETS(req.params.id, req.body).then(PETS => res.json(PETS))
    })   

    module.exports = router