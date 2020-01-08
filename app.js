const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5551

app.use(cors())
app.use(bodyParser.json())

const USERS = require("./USERS")
app.use("/USERS", USERS)

const PETS = require("./PETS")
app.use("/PETS", PETS)

const CONTEST = require("./CONTEST")
app.use("/CONTEST", CONTEST)

app.get('/',(req,res,next) => {
    res.send('Welcome to The Paw Kings Back-end Server Database')
})

app.listen(port ,  ()=> {
    console.log(`Staying Kings of the Paws on port : ${port}`)
})