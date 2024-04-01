import express from 'express'
import 'dotenv/config'
import dbConnect from './config/dbConnection.js'
import user from './router/user.js'
import cors from 'cors'

const app = express()
app.use(
    cors({
      origin: [
        "http://localhost:3000",
      ],
      credentials: true,
    })
  );
dbConnect()

app.use('/user',user)

const port = 8888
app.listen(port, () => {
    console.log(`server running on ${port}`);
})