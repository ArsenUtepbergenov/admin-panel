require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')

const SERVER_PORT = process.env.SERVER_PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
)
app.use('/api', router)
app.use(errorMiddleware)

async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/usersdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(SERVER_PORT, () => console.log(`Server started on PORT = ${SERVER_PORT}`))
  } catch (error) {
    console.error(error)
  }
}

start()
