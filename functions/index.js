const connectToMongo = require('../db');
const express = require('express')
const serverless = require('serverless-http')
var cors = require('cors') 
require('dotenv').config()

connectToMongo();
const app = express()
const router = express.Router();
const port = process.env.PORT || 8888

app.use(cors())
app.use(express.json())


app.use('/api/auth', require('../routes/auth'))

app.use('/.netlify/functions/api', router)
module.export.handler = serverless(app)

app.listen(port, () => {
  console.log(`XeroCodee backend listening at http://localhost:${port}`)
})
