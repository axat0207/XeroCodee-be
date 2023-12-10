const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = process.env.PORT || 8888

app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))



app.listen(port, () => {
  console.log(`XeroCodee backend listening at http://localhost:${port}`)
})