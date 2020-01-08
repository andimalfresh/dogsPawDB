const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5551

app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res,next) => {
    res.send('Welcome to The Paw Kings Back-end Server Database')
})

app.listen(port ,  ()=> {
    console.log(`Staying Kings of the Paws on port : ${port}`)
})