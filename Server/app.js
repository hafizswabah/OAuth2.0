import express from 'express'
import 'dotenv/config'
import dbConnect from './config/dbConnection.js'
import user from './router/user.js'

const app = express()
dbConnect()

app.use('/user',user)

const port = 8888
app.listen(port, () => {
    console.log(`server running on ${port}`);
})