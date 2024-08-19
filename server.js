const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('CONNECT DB')
    })
    .catch((err) => console.log(err))



const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(process.env.PORT, () => console.log('Server listening'))