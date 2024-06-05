const express = require('express')

const mongoose = require('mongoose')
require('dotenv').config()

const routes = require('./routes/TaskRoute.js');

const cors = require('cors')

const app = express()
const PORT = process.env.port| 5000

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`mongoDB connected...`))
  .catch((err) => console.log('err'))

  app.use("/api",routes);

app.listen(PORT, () => console.log(`App is listening to port: ${PORT}`))